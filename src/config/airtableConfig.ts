/**
 * Airtable configuration (runtime-safe)
 * - Reads Base ID and PAT from runtime (localStorage or optional window injection).
 * - No hardcoded secrets. Default Base ID points to the new "ClinicalRxQ Member Site App".
 *
 * Notes:
 * - You can override both at runtime:
 *   localStorage.setItem('AIRTABLE_BASE_ID', 'applrV1CPpt6GuK2d')
 *   localStorage.setItem('AIRTABLE_PAT', '<your PAT>')
 */

/** 
 * Get Airtable Base ID from runtime (localStorage → window → default).
 */
export function getAirtableBaseId(): string {
  // Default to the new base unless overridden at runtime
  const DEFAULT_BASE_ID = 'applrV1CPpt6GuK2d';
  try {
    const ls = localStorage.getItem('AIRTABLE_BASE_ID');
    if (ls && typeof ls === 'string' && ls.trim()) return ls.trim();
  } catch {
    // ignore
  }
  // @ts-expect-error optional window injection
  if (typeof window !== 'undefined' && window.__AIRTABLE_BASE_ID__) {
    // @ts-expect-error optional window injection
    return String(window.__AIRTABLE_BASE_ID__);
  }
  return DEFAULT_BASE_ID;
}

/**
 * Get Airtable PAT from runtime (localStorage → window).
 * SECURITY: This must be set by the environment; no fallbacks here.
 */
export function getAirtableToken(): string | null {
  try {
    const ls = localStorage.getItem('AIRTABLE_PAT');
    if (ls && typeof ls === 'string' && ls.trim()) return ls.trim();
  } catch {
    // ignore
  }
  // @ts-expect-error optional window injection
  if (typeof window !== 'undefined' && window.__AIRTABLE_PAT__) {
    // @ts-expect-error optional window injection
    return String(window.__AIRTABLE_PAT__);
  }
  return null;
}

/**
 * Legacy ID maps
 * - Kept only to avoid breaking older imports. Prefer Metadata API resolution.
 * - These may not match the new base; do NOT rely on them for new features.
 */
export const TABLE_IDS = {
  clinicalPrograms: 'tblCTUDN0EQWo1jAl',
  resources: 'tblVtpSmbjdQTfXdI',
  tags: 'tbl3WyJjKeNRszHPP',
  resourceTagsJunction: 'tbl4gE0MMU2SdiOI8',
  members: 'tblsxymfQsAnyg5OU',
  programs: 'tblCTUDN0EQWo1jAl',
} as const;

export const FIELD_IDS = {
  programs: {
    name: 'fldcA9E0TK9mq3W7I',
    description: 'fldLOY6tn3gpumgOY',
    level: 'fldS5Yug9jIbGYY5I',
    summary: 'fld1LEc2OrpuTLcv3',
    photo: 'fldvmCsjZMJlDUhLW',
    sortOrder: 'fldRzkc9e3EeVMtS6',
  },
} as const;
