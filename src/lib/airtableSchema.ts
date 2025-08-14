/**
 * Airtable schema resolver using the Metadata API.
 * - Fetches tables and fields for a base (by name) and caches to localStorage.
 * - Provides helpers to resolve Table IDs and Field IDs by known names.
 * - Uses runtime base selection via getAirtableBaseId().
 */

import { getAirtableBaseId, getAirtableToken } from '../config/airtableConfig';

/** Types for Airtable Metadata API response */
interface MetaField {
  id: string;
  name: string;
  type: string;
}

interface MetaTable {
  id: string;
  name: string;
  fields: MetaField[];
}

interface MetaResponse {
  tables: MetaTable[];
}

const META_CACHE_KEY = 'AIRTABLE_META_CACHE_v1';
const META_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Fetch Airtable metadata (tables + fields) using PAT.
 */
async function fetchMeta(): Promise<MetaResponse> {
  const token = getAirtableToken();
  if (!token) {
    throw new Error('Airtable PAT not found. Set it with localStorage.setItem("AIRTABLE_PAT", "your_pat").');
  }
  const baseId = getAirtableBaseId();
  const url = `https://api.airtable.com/v0/meta/bases/${baseId}/tables`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Airtable Metadata error ${res.status}: ${text || res.statusText}`);
  }
  return res.json() as Promise<MetaResponse>;
}

/**
 * Get metadata with localStorage caching.
 */
async function getMeta(): Promise<MetaResponse> {
  try {
    const raw = localStorage.getItem(META_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as { at: number; data: MetaResponse; baseId: string };
      // Bust cache if base changed
      if (parsed.baseId === getAirtableBaseId() && Date.now() - parsed.at < META_CACHE_TTL_MS) {
        return parsed.data;
      }
    }
  } catch {
    // ignore cache read errors
  }

  const data = await fetchMeta();
  try {
    localStorage.setItem(
      META_CACHE_KEY,
      JSON.stringify({ at: Date.now(), data, baseId: getAirtableBaseId() })
    );
  } catch {
    // ignore cache write errors
  }
  return data;
}

/**
 * Resolve a table ID by its display name.
 */
export async function resolveTableIdByName(tableName: string): Promise<string> {
  const meta = await getMeta();
  const table = meta.tables.find((t) => t.name === tableName);
  if (!table) throw new Error(`Airtable table not found by name: ${tableName}`);
  return table.id;
}

/**
 * Resolve a field ID by table name and field (display) name.
 */
export async function resolveFieldIdByNames(tableName: string, fieldName: string): Promise<string> {
  const meta = await getMeta();
  const table = meta.tables.find((t) => t.name === tableName);
  if (!table) throw new Error(`Airtable table not found by name: ${tableName}`);
  const field = table.fields.find((f) => f.name === fieldName);
  if (!field) throw new Error(`Airtable field not found: ${tableName}.${fieldName}`);
  return field.id;
}

/**
 * Utility: find the first existing field name from a list of candidates.
 */
export async function resolveFirstExistingFieldName(
  tableName: string,
  candidates: string[]
): Promise<string> {
  const meta = await getMeta();
  const table = meta.tables.find((t) => t.name === tableName);
  if (!table) throw new Error(`Airtable table not found by name: ${tableName}`);
  const available = new Set(table.fields.map((f) => f.name));
  for (const c of candidates) {
    if (available.has(c)) return c;
  }
  throw new Error(`None of the candidate fields exist in ${tableName}: ${candidates.join(', ')}`);
}

/**
 * Utility: resolve the Field ID of the first existing candidate field name.
 */
export async function resolveFirstFieldId(
  tableName: string,
  candidates: string[]
): Promise<string> {
  const name = await resolveFirstExistingFieldName(tableName, candidates);
  return resolveFieldIdByNames(tableName, name);
}
