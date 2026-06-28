'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { QuoteRequest } from '@/lib/types';

const pageTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: 32, margin: 0, color: 'var(--text-primary)',
};
const redRule: React.CSSProperties = {
  width: 64, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: '12px 0 32px',
};

const STATUS_COLORS: Record<string, { bg: string; color: string }> = {
  new: { bg: 'var(--dillo-red-50)', color: 'var(--dillo-red-500)' },
  contacted: { bg: 'var(--dillo-navy-50)', color: 'var(--dillo-navy-500)' },
  closed: { bg: 'var(--neutral-100)', color: 'var(--text-muted)' },
};

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => { load(); }, []);

  async function load() {
    const supabase = createClient();
    const { data } = await supabase.from('quote_requests').select('*').order('created_at', { ascending: false });
    setQuotes(data ?? []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    const supabase = createClient();
    await supabase.from('quote_requests').update({ status }).eq('id', id);
    setQuotes((prev) => prev.map((q) => q.id === id ? { ...q, status: status as QuoteRequest['status'] } : q));
  }

  return (
    <div>
      <h1 style={pageTitle}>Quote Requests</h1>
      <hr style={redRule} />

      {loading ? (
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>Loading…</p>
      ) : quotes.length === 0 ? (
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)' }}>No quote requests yet.</p>
      ) : (
        <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
          {/* Table header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1fr 1.2fr', gap: 0, background: 'var(--bg-page-alt)', borderBottom: '1px solid var(--border-default)', padding: '10px 16px' }}
            className="quotes-header">
            {['Name', 'Company', 'Phone', 'Requirement', 'Date', 'Status'].map((h) => (
              <span key={h} style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</span>
            ))}
          </div>

          {quotes.map((q, i) => (
            <div key={q.id}>
              <div
                onClick={() => setExpanded(expanded === q.id ? null : q.id)}
                style={{
                  display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1fr 1.2fr', gap: 0,
                  padding: '14px 16px', borderBottom: '1px solid var(--border-subtle)',
                  cursor: 'pointer', transition: 'background 100ms',
                  background: expanded === q.id ? 'var(--bg-page-alt)' : 'transparent',
                }}
                className="quotes-row"
              >
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{q.name}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14 }}>{q.company}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 14 }}>{q.phone}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)' }}>{q.requirement}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>
                  {new Date(q.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                </span>
                <span onClick={(e) => e.stopPropagation()}>
                  <select
                    value={q.status}
                    onChange={(e) => updateStatus(q.id, e.target.value)}
                    style={{
                      padding: '4px 8px', borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-default)',
                      fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
                      background: STATUS_COLORS[q.status]?.bg ?? 'var(--neutral-100)',
                      color: STATUS_COLORS[q.status]?.color ?? 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                  </select>
                </span>
              </div>

              {expanded === q.id && (
                <div style={{ padding: '16px 20px 20px', background: 'var(--dillo-navy-50)', borderBottom: '1px solid var(--border-subtle)', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
                  {[
                    ['Email', q.email],
                    ['Quantity', q.quantity],
                    ['Message', q.message],
                  ].map(([label, value]) => value ? (
                    <div key={label as string}>
                      <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{label}</div>
                      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-primary)' }}>{value}</div>
                    </div>
                  ) : null)}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .quotes-header { display: none !important; }
          .quotes-row { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
        }
      `}</style>
    </div>
  );
}
