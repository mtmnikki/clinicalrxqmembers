/**
 * Auth service (Airtable-backed)
 * - Looks up Members by email (case-insensitive).
 * - Verifies password using bcrypt hash in passwordHash; falls back to temporaryPassword if present.
 * - Optionally updates Last Login timestamp on success.
 *
 * Security note:
 * - This is client-side verification. For production, use a minimal backend proxy for credential checks.
 */

import bcrypt from 'bcryptjs';
import { listRecords, updateRecordByNames, AirtableRecord } from '../../lib/airtable';
import {
  resolveTableIdByName,
  resolveFirstExistingFieldName,
} from '../../lib/airtableSchema';

/** Returned user profile after successful login */
export interface AuthUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  pharmacyName?: string;
  subscriptionStatus?: string;
}

/**
 * Attempt to log in the user against the Members table.
 */
export async function login(email: string, password: string, opts?: { updateLastLogin?: boolean }): Promise<AuthUser> {
  // Resolve table and dynamic field names
  const tableName = 'Members';
  const tableId = await resolveTableIdByName(tableName);
  const emailField = await resolveFirstExistingFieldName(tableName, ['Email Address', 'Email']);
  const passwordHashField = await resolveFirstExistingFieldName(tableName, ['passwordHash', 'Password Hash']).catch(
    () => null
  );
  const tempPasswordField = await resolveFirstExistingFieldName(tableName, ['temporaryPassword']).catch(() => null);
  const firstNameField = await resolveFirstExistingFieldName(tableName, ['Pharmacist First Name', 'First Name']).catch(
    () => null
  );
  const lastNameField = await resolveFirstExistingFieldName(tableName, ['Pharmacist Last Name', 'Last Name']).catch(
    () => null
  );
  const pharmacyNameField = await resolveFirstExistingFieldName(tableName, ['Pharmacy Name']).catch(() => null);
  const subStatusField = await resolveFirstExistingFieldName(tableName, ['Subscription Status']).catch(() => null);
  const lastLoginField = await resolveFirstExistingFieldName(tableName, ['Last Login']).catch(() => null);

  // Query by email (case-insensitive)
  const lower = email.trim().toLowerCase().replace(/'/g, "\\'");
  const filter = `LOWER({${emailField}})='${lower}'`;
  const res = await listRecords<Record<string, unknown>>({
    tableId,
    filterByFormula: filter,
    pageSize: 1,
  });

  if (!res.records.length) {
    throw new Error('Invalid email or password.');
  }

  const rec = res.records[0];
  const fields = rec.fields as Record<string, unknown>;

  // Extract password fields by display names (because returnFieldsByFieldId=true, fields keys are IDs).
  // To avoid an extra metadata hop here, we rely on display-name-based filter only to fetch the record,
  // then read passwords by scanning the record's field values (not ideal). Instead, we will re-fetch
  // with returnFieldsByFieldId=false by calling the REST endpoint directly would complicate.
  // Practical approach: trust that passwordHash is present and compare via another fetch? Simpler: we read via field names using a fallback path.
  // Since listRecords returns field IDs, we should not rely on direct key access. We'll perform a second targeted fetch by recordId without returnFieldsByFieldId.
  // Implement that inline:
  const passwordData = await fetchMemberFieldsByNames(tableId, rec.id, [
    passwordHashField || '',
    tempPasswordField || '',
    emailField,
    firstNameField || '',
    lastNameField || '',
    pharmacyNameField || '',
    subStatusField || '',
    lastLoginField || '',
  ]);

  const hashVal = passwordHashField ? (passwordData[passwordHashField] as string | undefined) : undefined;
  const tmpVal = tempPasswordField ? (passwordData[tempPasswordField] as string | undefined) : undefined;

  let verified = false;
  if (hashVal && typeof hashVal === 'string' && hashVal.trim()) {
    try {
      verified = await bcrypt.compare(password, hashVal);
    } catch {
      verified = false;
    }
  }
  if (!verified && tmpVal && typeof tmpVal === 'string') {
    verified = tmpVal === password;
  }
  if (!verified) {
    throw new Error('Invalid email or password.');
  }

  // Build user
  const user: AuthUser = {
    id: rec.id,
    email,
    firstName: firstNameField ? (passwordData[firstNameField] as string | undefined) : undefined,
    lastName: lastNameField ? (passwordData[lastNameField] as string | undefined) : undefined,
    pharmacyName: pharmacyNameField ? (passwordData[pharmacyNameField] as string | undefined) : undefined,
    subscriptionStatus: subStatusField ? (passwordData[subStatusField] as string | undefined) : undefined,
  };

  // Optional: update Last Login
  if (opts?.updateLastLogin && lastLoginField) {
    try {
      await updateRecordByNames<Record<string, unknown>>({
        tableId,
        recordId: rec.id,
        fields: {
          [lastLoginField]: new Date().toISOString(),
        },
        returnFieldsByFieldId: false,
      });
    } catch {
      // non-fatal
    }
  }

  return user;
}

/**
 * Helper: fetch a single member record by ID returning fields keyed by names (not IDs).
 * - We use the standard REST endpoint without returnFieldsByFieldId to get a name-keyed fields object.
 */
async function fetchMemberFieldsByNames(
  tableId: string,
  recordId: string,
  ensureFields?: string[]
): Promise<Record<string, unknown>> {
  // We avoid importing list/get from airtable.ts to control returnFieldsByFieldId flag
  // and instead call fetch directly.
  const token = (await import('../../config/airtableConfig')).getAirtableToken();
  const baseId = (await import('../../config/airtableConfig')).getAirtableBaseId();
  const url = `https://api.airtable.com/v0/${baseId}/${tableId}/${recordId}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token!}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => '');
    throw new Error(`Airtable read error: ${txt || res.statusText}`);
  }
  const json = (await res.json()) as AirtableRecord<Record<string, unknown>>;
  const fields = json.fields || {};

  // ensureFields is not required here, but we keep the param to make intent explicit
  return fields;
}
