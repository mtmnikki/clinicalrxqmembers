/**
 * Login page
 * - Authenticates against Airtable Members using authService.login.
 * - Adds an inline "Airtable Dev Config" panel to set Base ID and PAT without using the console.
 * - Keeps the smaller AirtableStatus hint at the top.
 */

import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { Lock, Mail, Loader2, CheckCircle2, AlertTriangle, Eye, EyeOff, Shield, Save, Network, ChevronDown, ChevronUp } from 'lucide-react';
import { login as loginMember } from '../services/airtable/authService';
import { getAirtableBaseId, getAirtableToken } from '../config/airtableConfig';
import { toast } from 'sonner';
import { useAuthStore } from '../stores/authStore';

/** Minimal runtime Airtable status (inline for this page) */
function AirtableStatusInline() {
  const [hasToken, setHasToken] = useState<boolean>(false);
  const [base, setBase] = useState<string>('');

  useEffect(() => {
    setHasToken(!!getAirtableToken());
    setBase(getAirtableBaseId());
  }, []);

  return (
    <div className="mt-4 flex items-center gap-2 text-xs">
      {hasToken ? (
        <>
          <CheckCircle2 className="text-emerald-600" size={16} />
          <span className="text-slate-600">Airtable: Configured (Base: {base})</span>
        </>
      ) : (
        <>
          <AlertTriangle className="text-amber-600" size={16} />
          <span className="text-slate-600">Airtable: Missing PAT. Use the Dev Config below to set it.</span>
        </>
      )}
    </div>
  );
}

/**
 * DevConfigPanel
 * - Purpose: Provide inputs to set Base ID and PAT in localStorage and test connectivity from the UI.
 */
function DevConfigPanel() {
  const [open, setOpen] = useState(false);
  const [base, setBase] = useState<string>('');
  const [pat, setPat] = useState<string>('');
  const [showPat, setShowPat] = useState(false);
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg?: string } | null>(null);

  useEffect(() => {
    try {
      setBase(getAirtableBaseId() || '');
      setPat(getAirtableToken() || '');
    } catch {
      // ignore
    }
  }, []);

  /** Save values to localStorage */
  function save() {
    try {
      if (!base.trim() || !pat.trim()) {
        toast.error('Please enter both Base ID and PAT.');
        return;
      }
      localStorage.setItem('AIRTABLE_BASE_ID', base.trim());
      localStorage.setItem('AIRTABLE_PAT', pat.trim());
      toast.success('Saved Airtable configuration.');
      setResult(null);
    } catch (e) {
      toast.error('Failed to save configuration.');
    }
  }

  /** Test connectivity via Metadata API */
  async function testConnection() {
    setTesting(true);
    setResult(null);
    try {
      const url = `https://api.airtable.com/v0/meta/bases/${base.trim()}/tables`;
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${pat.trim()}`, 'Content-Type': 'application/json' },
      });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        setResult({ ok: false, msg: text || res.statusText });
        toast.error('Airtable test failed.');
      } else {
        setResult({ ok: true });
        toast.success('Airtable connected.');
      }
    } catch (e: any) {
      setResult({ ok: false, msg: e?.message || 'Network error' });
      toast.error('Airtable test failed.');
    } finally {
      setTesting(false);
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-slate-200 bg-white/80">
      <button
        type="button"
        className="flex w-full items-center justify-between px-4 py-2 text-sm font-medium text-slate-800"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="inline-flex items-center gap-2">
          <Shield className="h-4 w-4 text-slate-600" />
          Airtable Dev Config
        </span>
        {open ? <ChevronUp className="h-4 w-4 text-slate-500" /> : <ChevronDown className="h-4 w-4 text-slate-500" />}
      </button>

      {open && (
        <div className="space-y-3 border-t border-slate-200 p-4 text-sm">
          <div>
            <label className="mb-1 block font-medium text-slate-800">Base ID</label>
            <input
              value={base}
              onChange={(e) => setBase(e.target.value)}
              placeholder="applrV1CPpt6GuK2d"
              className="w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>
          <div>
            <label className="mb-1 block font-medium text-slate-800">Personal Access Token (PAT)</label>
            <div className="relative">
              <input
                type={showPat ? 'text' : 'password'}
                value={pat}
                onChange={(e) => setPat(e.target.value)}
                placeholder="pat..."
                className="w-full rounded-lg border border-slate-200 px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500"
                onClick={() => setShowPat((v) => !v)}
                aria-label={showPat ? 'Hide PAT' : 'Show PAT'}
              >
                {showPat ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={save}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              <Save className="h-4 w-4" />
              Save
            </button>
            <button
              type="button"
              onClick={testConnection}
              disabled={testing}
              className="inline-flex items-center justify-center gap-2 rounded-lg border bg-transparent border-slate-300 px-3 py-2 text-sm font-semibold text-slate-800 hover:border-cyan-400 hover:text-cyan-500 disabled:opacity-60"
            >
              {testing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Network className="h-4 w-4" />}
              {testing ? 'Testing…' : 'Save & Test'}
            </button>
          </div>

          {result ? (
            <div
              className={`rounded-lg px-3 py-2 text-xs ${
                result.ok
                  ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border border-red-200 bg-red-50 text-red-700'
              }`}
            >
              {result.ok ? 'Connection successful.' : result.msg || 'Connection failed.'}
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

/** Login page component */
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    const em = email.trim();
    if (!em || !password) {
      setErrorMsg('Please enter your email and password.');
      return;
    }

    setSubmitting(true);
    try {
      const user = await loginMember(em, password, { updateLastLogin: true });

      // Hydrate auth store (zustand) in a safe, generic way
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (useAuthStore as any).setState?.({ isAuthenticated: true, user });
      } catch {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (useAuthStore as any).setState?.({ isAuthenticated: true });
        } catch {
          // ignore
        }
      }

      toast.success('Welcome back!');
      navigate('/dashboard');
    } catch (err: any) {
      const msg = err?.message || 'Login failed.';
      setErrorMsg(msg);
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  }

  const hasPat = useMemo(() => !!getAirtableToken(), []);

  return (
    <div className="mx-auto flex min-h-[80vh] max-w-md flex-col justify-center px-4">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
          <Lock size={22} />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">Member Login</h1>
        <p className="mt-1 text-sm text-slate-600">Access your ClinicalRxQ dashboard and resources.</p>
        <AirtableStatusInline />
      </div>

      <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
              Email address
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@pharmacy.com"
                className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                autoComplete="email"
              />
              <Mail size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-800">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-lg border border-slate-200 bg-white px-10 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-200"
                autoComplete="current-password"
              />
              <Lock size={18} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
          </div>

          {errorMsg ? (
            <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{errorMsg}</div>
          ) : null}

          <button
            type="submit"
            disabled={submitting || !hasPat}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-70"
            title={!hasPat ? 'Configure Airtable to enable sign-in' : undefined}
          >
            {submitting ? <Loader2 className="animate-spin" size={18} /> : null}
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
        </div>
      </form>

      {/* Dev config panel */}
      <DevConfigPanel />

      <p className="mt-4 text-center text-xs text-slate-500">
        Tip: Ensure your Airtable Base and PAT are set in this browser for login to work.
      </p>
    </div>
  );
}
