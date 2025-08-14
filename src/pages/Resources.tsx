/**
 * Resources page (Airtable-backed)
 * - Lists all resources or filters by category using rollup linkedResourceID -> Resources by IDs.
 * - Supported categories: handouts, clinical, billing.
 */

import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Library, Search, SlidersHorizontal, Loader2 } from 'lucide-react';
import ResourceCard from '../components/resources/ResourceCard';
import type { LibraryResource } from '../services/airtable/resourceService';
import { listAllResources, listResourcesByCategoryKey } from '../services/airtable/resourceService';

/** Local types for category keys */
type CatKey = 'all' | 'handouts' | 'clinical' | 'billing';

/** Map keys to friendly names (UI) */
const CAT_LABELS: Record<CatKey, string> = {
  all: 'All Resources',
  handouts: 'Patient Handouts',
  clinical: 'Clinical Resources',
  billing: 'Medical Billing',
};

/**
 * Parse the ?cat query param from the current location.
 */
function useCatParam(): [CatKey, (next: CatKey) => void] {
  const location = useLocation();
  const navigate = useNavigate();

  const key = useMemo<CatKey>(() => {
    const search = new URLSearchParams(location.search);
    const raw = (search.get('cat') || '').toLowerCase();
    if (raw === 'handouts' || raw === 'clinical' || raw === 'billing') return raw;
    return 'all';
  }, [location.search]);

  const setKey = (next: CatKey) => {
    const search = new URLSearchParams(location.search);
    if (next === 'all') {
      search.delete('cat');
    } else {
      search.set('cat', next);
    }
    navigate({ pathname: location.pathname, search: `?${search.toString()}` });
  };

  return [key, setKey];
}

/**
 * Resources Page component
 */
export default function Resources() {
  const [cat, setCat] = useCatParam();
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [items, setItems] = useState<LibraryResource[]>([]);

  // Fetch resources when category changes
  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setErrorMsg(null);
      try {
        let data: LibraryResource[];
        if (cat === 'all') {
          data = await listAllResources();
        } else {
          data = await listResourcesByCategoryKey(cat);
        }
        if (!cancelled) setItems(data);
      } catch (err: any) {
        if (!cancelled) setErrorMsg(err?.message || 'Failed to load resources.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [cat]);

  // Filter by simple keyword (name/description/type)
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((r) => {
      return (
        r.name.toLowerCase().includes(term) ||
        (r.description || '').toLowerCase().includes(term) ||
        (r.type || '').toLowerCase().includes(term)
      );
    });
  }, [items, q]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">
            <Library size={20} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">ClinicalRxQ Resource Library</h1>
            <p className="text-sm text-slate-600">
              {CAT_LABELS[cat]} · {loading ? 'Loading…' : `${filtered.length} result(s)`}
            </p>
          </div>
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap items-center gap-2">
          {(['all', 'handouts', 'clinical', 'billing'] as CatKey[]).map((k) => {
            const active = cat === k;
            return (
              <button
                key={k}
                onClick={() => setCat(k)}
                className={
                  active
                    ? 'rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white'
                    : 'rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50'
                }
              >
                {CAT_LABELS[k]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search and filters */}
      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="col-span-2">
          <div className="relative">
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by name, description, or type…"
              className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
            <SlidersHorizontal size={16} />
            Filters
          </div>
        </div>
      </div>

      {/* Content area */}
      {loading ? (
        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-700">
          <Loader2 className="animate-spin" size={18} />
          Loading resources…
        </div>
      ) : errorMsg ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      ) : filtered.length === 0 ? (
        <div className="rounded-lg border border-slate-200 bg-white px-4 py-8 text-center text-slate-600">
          No resources found. Try a different category or search term.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </div>
  );
}
