/**
 * AirtableStatus
 * - Purpose: Small status pill that reports Airtable browser-config status (PAT/Base) and connectivity.
 * - Behavior:
 *   - If PAT is missing: show "Airtable: Not configured" (amber).
 *   - If PAT present, pings Metadata API to confirm connectivity to the current Base ID.
 *   - Shows Connected (green) or Error (red) with a short message.
 */

import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, AlertTriangle, XCircle, Loader2 } from 'lucide-react';
import { getAirtableBaseId, getAirtableToken } from '../../config/airtableConfig';

/**
 * Result shape for the status probe
 */
interface ProbeState {
  state: 'idle' | 'checking' | 'ok' | 'missing' | 'error';
  message?: string;
}

/**
 * Fetch metadata to validate token/base. Uses the official Metadata endpoint.
 */
async function probeAirtable(): Promise<{ ok: boolean; message?: string }> {
  const token = getAirtableToken();
  const baseId = getAirtableBaseId();

  if (!token) {
    return { ok: false, message: 'Missing PAT' };
  }

  const url = `https://api.airtable.com/v0/meta/bases/${baseId}/tables`;
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      return { ok: false, message: text || res.statusText };
    }
    return { ok: true };
  } catch (e: any) {
    return { ok: false, message: e?.message || 'Network error' };
  }
}

/**
 * AirtableStatus component
 */
export default function AirtableStatus({ className = '' }: { className?: string }) {
  const [probe, setProbe] = useState<ProbeState>({ state: 'idle' });

  const token = useMemo(() => getAirtableToken(), []);
  const baseId = useMemo(() => getAirtableBaseId(), []);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      if (!token) {
        setProbe({ state: 'missing', message: 'PAT not set' });
        return;
      }
      setProbe({ state: 'checking' });
      const result = await probeAirtable();
      if (cancelled) return;
      setProbe(result.ok ? { state: 'ok' } : { state: 'error', message: result.message });
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [token, baseId]);

  if (probe.state === 'missing') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-medium text-amber-800 ${className}`}
        title="Set your Airtable PAT and Base ID"
      >
        <AlertTriangle className="h-3.5 w-3.5" />
        Airtable: Not configured
      </span>
    );
  }

  if (probe.state === 'checking' || probe.state === 'idle') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700 ${className}`}
        title="Checking Airtable connectivity"
      >
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
        Airtable: Checking…
      </span>
    );
  }

  if (probe.state === 'ok') {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-medium text-emerald-700 ${className}`}
        title={`Base ${baseId} connected`}
      >
        <CheckCircle2 className="h-3.5 w-3.5" />
        Airtable: Connected
      </span>
    );
  }

  // error
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-medium text-red-700 ${className}`}
      title={probe.message || 'Error'}
    >
      <XCircle className="h-3.5 w-3.5" />
      Airtable: Error
    </span>
  );
}
