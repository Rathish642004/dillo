'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import {
  LayoutDashboard, MessageSquare, Building2, ShoppingBag,
  FolderOpen, Quote, Users, LogOut, Menu, X,
} from 'lucide-react';

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard, exact: true },
  { href: '/admin/quotes', label: 'Quotes', icon: MessageSquare },
  { href: '/admin/company', label: 'Company', icon: Building2 },
  { href: '/admin/products', label: 'Products', icon: ShoppingBag },
  { href: '/admin/portfolio', label: 'Portfolio', icon: FolderOpen },
  { href: '/admin/testimonials', label: 'Testimonials', icon: Quote },
  { href: '/admin/clients', label: 'Clients', icon: Users },
];

export default function AdminSidebar({ newQuoteCount = 0 }: { newQuoteCount?: number }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  }

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href);

  const sidebarContent = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{
          display: 'inline-block', background: 'var(--dillo-red-500)', color: '#fff',
          fontFamily: 'var(--font-display)', fontSize: 18, padding: '4px 12px', borderRadius: 2,
        }}>DILLO</div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4 }}>
          Admin Panel
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {navItems.map(({ href, label, icon: Icon, exact }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href} href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px',
                borderRadius: 'var(--radius-md)', textDecoration: 'none',
                background: active ? 'rgba(215,1,31,0.15)' : 'transparent',
                color: active ? '#fff' : 'rgba(255,255,255,0.65)',
                fontFamily: 'var(--font-heading)', fontWeight: active ? 600 : 400, fontSize: 14,
                borderLeft: active ? '3px solid var(--dillo-red-500)' : '3px solid transparent',
                transition: 'all 150ms',
              }}
            >
              <Icon size={16} />
              <span>{label}</span>
              {label === 'Quotes' && newQuoteCount > 0 && (
                <span style={{
                  marginLeft: 'auto', background: 'var(--dillo-red-500)', color: '#fff',
                  borderRadius: 'var(--radius-pill)', padding: '1px 7px', fontSize: 11,
                  fontWeight: 700,
                }}>{newQuoteCount}</span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sign out */}
      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <button
          onClick={handleSignOut}
          style={{
            display: 'flex', alignItems: 'center', gap: 10, width: '100%',
            padding: '10px 12px', borderRadius: 'var(--radius-md)',
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--font-heading)', fontSize: 14,
            transition: 'color 150ms',
          }}
        >
          <LogOut size={16} />
          <span>Sign out</span>
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside style={{
        width: 220, background: 'var(--dillo-navy-500)', height: '100vh',
        position: 'sticky', top: 0, flexShrink: 0, display: 'flex', flexDirection: 'column',
      }}
        className="admin-sidebar-desktop"
      >
        {sidebarContent}
      </aside>

      {/* Mobile top bar */}
      <div style={{
        display: 'none', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'var(--dillo-navy-500)', padding: '12px 16px',
        alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '3px solid var(--dillo-red-500)',
      }}
        className="admin-topbar-mobile"
      >
        <div style={{
          display: 'inline-block', background: 'var(--dillo-red-500)', color: '#fff',
          fontFamily: 'var(--font-display)', fontSize: 16, padding: '3px 10px', borderRadius: 2,
        }}>DILLO</div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff', padding: 4 }}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99, display: 'flex',
        }}
          className="admin-drawer-mobile"
        >
          <div
            style={{ flex: 1, background: 'rgba(0,0,0,0.5)' }}
            onClick={() => setMobileOpen(false)}
          />
          <div style={{
            width: 220, background: 'var(--dillo-navy-500)', height: '100%', flexShrink: 0,
          }}>
            {sidebarContent}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .admin-sidebar-desktop { display: none !important; }
          .admin-topbar-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
