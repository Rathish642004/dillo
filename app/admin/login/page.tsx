'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const supabase = createClient();
    const { error: authError } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (authError) {
      setError('Invalid email or password.');
    } else {
      window.location.href = '/admin';
    }
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg-page-alt)', padding: '24px',
    }}>
      <div style={{
        background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-lg)', padding: '48px', width: '100%', maxWidth: 420,
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <span style={{
            display: 'inline-block', background: 'var(--dillo-red-500)', color: '#fff',
            fontFamily: 'var(--font-display)', fontSize: 22, padding: '6px 16px', borderRadius: 2,
          }}>DILLO</span>
          <div style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 13,
            color: 'var(--text-secondary)', marginTop: 6,
          }}>Admin Panel</div>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700,
          margin: '0 0 24px', textAlign: 'center',
        }}>Sign in</h1>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
              Email
            </label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              required autoComplete="email"
              style={{
                width: '100%', height: 48, padding: '0 14px', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 15,
                background: 'var(--neutral-0)', color: 'var(--text-primary)', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, marginBottom: 6 }}>
              Password
            </label>
            <input
              type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              required autoComplete="current-password"
              style={{
                width: '100%', height: 48, padding: '0 14px', border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)', fontFamily: 'var(--font-body)', fontSize: 15,
                background: 'var(--neutral-0)', color: 'var(--text-primary)', outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>
          {error && (
            <div style={{ color: 'var(--dillo-red-500)', fontSize: 14, fontFamily: 'var(--font-body)' }}>
              {error}
            </div>
          )}
          <button
            type="submit" disabled={loading}
            style={{
              height: 48, background: loading ? 'var(--dillo-red-300)' : 'var(--dillo-red-500)',
              color: '#fff', border: 'none', borderRadius: 'var(--radius-md)',
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 15,
              cursor: loading ? 'not-allowed' : 'pointer', marginTop: 8,
              transition: 'background 200ms',
            }}
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
