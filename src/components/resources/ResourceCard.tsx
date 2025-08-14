/**
 * ResourceCard
 * - Reusable card to display a resource entry with type badge, description, and download CTA.
 */

import React from 'react';
import { Download, FileText, FileSpreadsheet, File, Link as LinkIcon } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { LibraryResource } from '../../services/airtable/resourceService';

/** Props for ResourceCard */
export interface ResourceCardProps {
  resource: LibraryResource;
  className?: string;
}

/**
 * Get an icon based on a guessed file extension or resource type.
 */
function getIcon(name?: string, type?: string) {
  const n = (name || '').toLowerCase();
  const t = (type || '').toLowerCase();
  if (n.endsWith('.pdf') || t.includes('protocol') || t.includes('manual')) return FileText;
  if (n.endsWith('.csv') || n.endsWith('.xlsx') || n.endsWith('.xls') || t.includes('spreadsheet')) return FileSpreadsheet;
  if (t.includes('link')) return LinkIcon;
  return File;
}

/**
 * ResourceCard component
 */
export default function ResourceCard({ resource, className }: ResourceCardProps) {
  const first = resource.attachments?.[0];
  const Icon = getIcon(first?.filename, resource.type);

  return (
    <div className={cn('group relative rounded-xl border border-slate-200 bg-white/90 p-4 shadow-sm hover:shadow-md transition-shadow', className)}>
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
          <Icon size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900" title={resource.name}>
            {resource.name}
          </h3>
          {resource.type ? (
            <span className="mt-1 inline-flex items-center rounded-full bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
              {resource.type}
            </span>
          ) : null}
          {resource.description ? (
            <p className="mt-2 line-clamp-2 text-sm text-slate-600">{resource.description}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs text-slate-500">{resource.attachments?.length || 0} file(s)</div>
        {first ? (
          <a
            href={first.url}
            download={first.filename}
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            <Download size={16} />
            Download
          </a>
        ) : (
          <button
            disabled
            className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-md bg-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600"
            title="No file available"
          >
            <Download size={16} />
            Download
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Lightweight classnames util fallback (kept local to avoid extra deps).
 * Prefer using a shared util if already present.
 */
