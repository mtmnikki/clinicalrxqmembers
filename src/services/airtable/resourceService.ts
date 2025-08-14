/**
 * Resource service (Airtable-backed)
 * - Primary path: category-based filtering via ResourceCategories.linkedResourceID rollups.
 * - Fallbacks can be added later (e.g., Tags/Junction).
 *
 * Exposed functions:
 * - listAllResources()
 * - listResourcesByCategoryKey('handouts'|'billing'|'clinical')
 *
 * Output: normalized resource objects with name, description, type, and attachments.
 */

import {
  listAllRecords,
  listRecordsByIds,
  AirtableRecord,
  SimpleAttachment,
  getAttachmentArray,
} from '../../lib/airtable';
import {
  resolveTableIdByName,
  resolveFirstExistingFieldName,
  resolveFirstFieldId,
} from '../../lib/airtableSchema';

/** Normalized Resource output */
export interface LibraryResource {
  id: string;
  name: string;
  description?: string;
  type?: string;
  attachments: SimpleAttachment[];
}

/**
 * Utility: best-effort resolve a field ID by trying candidate names in priority order.
 */
async function resolveFieldIdAny(tableName: string, candidates: string[]): Promise<string> {
  return resolveFirstFieldId(tableName, candidates);
}

/**
 * Utility: chunk an array (for long OR(RECORD_ID()) queries).
 */
function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

/**
 * Normalize a Resource record into LibraryResource.
 */
async function toLibraryResource(
  tableName: string,
  rec: AirtableRecord<Record<string, unknown>>
): Promise<LibraryResource> {
  // Resolve key field IDs once (per call scope). In a real app, memoize these.
  const nameId = await resolveFieldIdAny(tableName, ['resourceName', 'name']);
  const descId = await resolveFieldIdAny(tableName, ['description']).catch(() => '');
  const fileId = await resolveFieldIdAny(tableName, ['resourceFile', 'file']).catch(() => '');
  const typeId = await resolveFieldIdAny(tableName, ['typeName', 'resourceType']).catch(() => '');

  const f = rec.fields as Record<string, unknown>;
  const name = (f[nameId] as string) || 'Untitled';
  const description = descId ? (f[descId] as string | undefined) : undefined;

  // type may be a linked record name or a singleSelect option object/string;
  // we coerce to string when possible.
  let type: string | undefined = undefined;
  if (typeId && f[typeId] != null) {
    const v = f[typeId] as any;
    if (typeof v === 'string') type = v;
    else if (Array.isArray(v) && v.length && typeof v[0] === 'string') type = v[0];
    else if (Array.isArray(v) && v.length && v[0] && typeof v[0] === 'object' && v[0].name) type = v[0].name;
    else if (v && typeof v === 'object' && v.name) type = v.name;
  }

  const attachments = fileId ? getAttachmentArray(f[fileId]) : [];

  return {
    id: rec.id,
    name,
    description,
    type,
    attachments,
  };
}

/**
 * List all Resource records (attachments and basic fields).
 */
export async function listAllResources(): Promise<LibraryResource[]> {
  const tableName = 'Resources';
  const tableId = await resolveTableIdByName(tableName);
  // We will fetch all but only request minimal fields for speed.
  const nameId = await resolveFieldIdAny(tableName, ['resourceName', 'name']);
  const descId = await resolveFieldIdAny(tableName, ['description']).catch(() => undefined);
  const fileId = await resolveFieldIdAny(tableName, ['resourceFile', 'file']).catch(() => undefined);
  const typeId = await resolveFieldIdAny(tableName, ['typeName', 'resourceType']).catch(() => undefined);
  const fields = [nameId, descId, fileId, typeId].filter(Boolean) as string[];

  const records = await listAllRecords<Record<string, unknown>>({
    tableId,
    fields,
    pageSize: 100,
  });

  const out: LibraryResource[] = [];
  for (const rec of records) {
    out.push(await toLibraryResource(tableName, rec));
  }
  return out;
}

/**
 * Get Resources by high-level category key using ResourceCategories linkedResourceID rollups.
 * Supported keys and mapped category names:
 * - 'handouts' → 'Patient Handouts'
 * - 'billing'  → 'Medical Billing'
 * - 'clinical' → 'Clinical Resources'
 */
export async function listResourcesByCategoryKey(
  key: 'handouts' | 'billing' | 'clinical'
): Promise<LibraryResource[]> {
  const map: Record<typeof key, string> = {
    handouts: 'Patient Handouts',
    billing: 'Medical Billing',
    clinical: 'Clinical Resources',
  } as const;

  const categoriesTable = 'ResourceCategories';
  const resourcesTable = 'Resources';

  const categoriesTableId = await resolveTableIdByName(categoriesTable);
  const resourcesTableId = await resolveTableIdByName(resourcesTable);

  // Resolve the rollup and categoryName fields
  const linkedRollupId = await resolveFieldIdAny(categoriesTable, ['linkedResourceID', 'linkedResourceIds']);
  const categoryNameField = await resolveFirstExistingFieldName(categoriesTable, ['categoryName', 'Category']);

  // 1) Fetch the category record by name
  const catName = map[key];
  const filter = `LOWER({${categoryNameField}})='${catName.toLowerCase().replace(/'/g, "\\'")}'`;
  const catRes = await listAllRecords<Record<string, unknown>>({
    tableId: categoriesTableId,
    pageSize: 100,
    maxRecords: 1,
    sort: [{ field: categoryNameField, direction: 'asc' }],
    // We use name in filterByFormula; return fields by IDs
    filterByFormula: filter,
    fields: [linkedRollupId],
  });

  if (!catRes.length) return [];

  const roll = catRes[0].fields[linkedRollupId] as unknown;
  const ids = Array.isArray(roll) ? (roll.filter((v) => typeof v === 'string') as string[]) : [];

  if (!ids.length) return [];

  // 2) Fetch Resources by those Record IDs, chunk to avoid URL limits
  const nameId = await resolveFieldIdAny(resourcesTable, ['resourceName', 'name']);
  const descId = await resolveFieldIdAny(resourcesTable, ['description']).catch(() => undefined);
  const fileId = await resolveFieldIdAny(resourcesTable, ['resourceFile', 'file']).catch(() => undefined);
  const typeId = await resolveFieldIdAny(resourcesTable, ['typeName', 'resourceType']).catch(() => undefined);
  const fields = [nameId, descId, fileId, typeId].filter(Boolean) as string[];

  const chunks = chunk(ids, 40);
  const out: LibraryResource[] = [];
  for (const c of chunks) {
    const res = await listRecordsByIds<Record<string, unknown>>({
      tableId: resourcesTableId,
      recordIds: c,
      fields,
    });
    for (const rec of res.records) {
      out.push(await toLibraryResource(resourcesTable, rec));
    }
  }

  return out;
}
