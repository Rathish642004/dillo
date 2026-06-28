'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { MessageSquare, FolderOpen, ShoppingBag, Users, ArrowRight } from 'lucide-react';
import type { QuoteRequest } from '@/lib/types';

interface Counts { newQuotes: number; projects: number; products: number; clients: number; }

const pageTitle: React.CSSProperties = {
  fontFamily: 'var(--font-display)', fontSize: 32, margin: 0, color: 'var(--text-primary)',
};
const redRule: React.CSSProperties = {
  width: 64, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: '12px 0 32px',
};

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Counts>({ newQuotes: 0, projects: 0, products: 0, clients: 0 });
  const [recentQuotes, setRecentQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const [q1, q2, q3, q4, q5] = await Promise.all([
        supabase.from('quote_requests').select('*', { count: 'exact', head: true }).eq('status', 'new'),
        supabase.from('portfolio_projects').select('*', { count: 'exact', head: true }),
        supabase.from('products').select('*', { count: 'exact', head: true }),
        supabase.from('clients').select('*', { count: 'exact', head: true }),
        supabase.from('quote_requests').select('*').order('created_at', { ascending: false }).limit(5),
      ]);
      setCounts({ newQuotes: q1.count ?? 0, projects: q2.count ?? 0, products: q3.count ?? 0, clients: q4.count ?? 0 });
      setRecentQuotes(q5.data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  const statCards = [
    { label: 'New Quotes', value: counts.newQuotes, icon: MessageSquare, href: '/admin/quotes', accent: true },
    { label: 'Portfolio Projects', value: counts.projects, icon: FolderOpen, href: '/admin/portfolio', accent: false },
    { label: 'Products', value: counts.products, icon: ShoppingBag, href: '/admin/products', accent: false },
    { label: 'Clients', value: counts.clients, icon: Users, href: '/admin/clients', accent: false },
  ];

  const quickLinks = [
    { href: '/admin/quotes', label: 'Quote Inbox' },
    { href: '/admin/company', label: 'Company Info' },
    { href: '/admin/products', label: 'Products' },
    { href: '/admin/portfolio', label: 'Portfolio' },
    { href: '/admin/testimonials', label: 'Testimonials' },
    { href: '/admin/clients', label: 'Clients' },
  ];

  return (
    <div>
      <h1 style={pageTitle}>Dashboard</h1>
      <hr style={redRule} />

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 20, marginBottom: 40 }}>
        {statCards.map(({ label, value, icon: Icon, href, accent }) => (
          <Link key={href} href={href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: accent ? 'var(--dillo-red-500)' : 'var(--surface-card)',
              borderRadius: 'var(--radius-lg)', padding: '24px',
              boxShadow: 'var(--shadow-md)', border: accent ? 'none' : '1px solid var(--border-subtle)',
              display: 'flex', flexDirection: 'column', gap: 12, cursor: 'pointer',
              transition: 'box-shadow 200ms',
            }}>
              <Icon size={24} color={accent ? '#fff' : 'var(--dillo-red-500)'} />
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: accent ? '#fff' : 'var(--text-primary)', lineHeight: 1 }}>
                {loading ? '–' : value}
              </div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, color: accent ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {label}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
        {/* Quick links */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>Quick links</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {quickLinks.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 16px', background: 'var(--surface-card)',
                borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
                textDecoration: 'none', color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 14,
              }}>
                {label}
                <ArrowRight size={14} color="var(--text-muted)" />
              </Link>
            ))}
          </div>
        </div>

        {/* Recent quotes */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, margin: '0 0 16px' }}>Recent quotes</h2>
          <div style={{ background: 'var(--surface-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
            {loading ? (
              <div style={{ padding: 24, color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 14 }}>Loading…</div>
            ) : recentQuotes.length === 0 ? (
              <div style={{ padding: 24, color: 'var(--text-muted)', fontFamily: 'var(--font-body)', fontSize: 14 }}>No quotes yet.</div>
            ) : (
              recentQuotes.map((q, i) => (
                <div key={q.id} style={{
                  padding: '14px 16px', borderBottom: i < recentQuotes.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14 }}>{q.name}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{q.requirement}</div>
                  </div>
                  <span style={{
                    background: q.status === 'new' ? 'var(--dillo-red-50)' : q.status === 'contacted' ? 'var(--dillo-navy-50)' : 'var(--neutral-100)',
                    color: q.status === 'new' ? 'var(--dillo-red-500)' : q.status === 'contacted' ? 'var(--dillo-navy-500)' : 'var(--text-muted)',
                    padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
                    textTransform: 'uppercase', letterSpacing: '0.08em',
                  }}>{q.status}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
