'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const links = [
  { key: 'home',      label: 'Home',      href: '/' },
  { key: 'about',     label: 'About',     href: '/about' },
  { key: 'products',  label: 'Products',  href: '/products' },
  { key: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { key: 'contact',   label: 'Contact',   href: '/contact' },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--neutral-0)',
      borderBottom: `1px solid ${scrolled ? 'var(--border-default)' : 'transparent'}`,
      boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    }}>
      <div className="dillo-container" style={{ display: 'flex', alignItems: 'center', gap: 24, height: 72 }}>
        {/* Brand lockup */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--dillo-red-500)', color: 'var(--neutral-0)',
            padding: '6px 12px', borderRadius: 2,
            fontFamily: 'var(--font-display)', fontSize: 22, letterSpacing: '0.02em',
            lineHeight: 1,
          }}>DILLO</span>
          <span style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic',
            color: 'var(--dillo-navy-500)', fontSize: 14,
          }} className="nav-tagline">The Perfect Uniform Makers</span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }} className="nav-desktop">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link key={l.key} href={l.href} style={{
                position: 'relative',
                padding: '10px 14px',
                fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14,
                color: active ? 'var(--dillo-red-500)' : 'var(--text-primary)',
                textDecoration: 'none',
                borderRadius: 'var(--radius-md)',
              }}>
                {l.label}
                {active ? (
                  <span style={{
                    position: 'absolute', left: 14, right: 14, bottom: 4,
                    height: 3, background: 'var(--dillo-red-500)',
                  }} />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" style={{ textDecoration: 'none' }} className="nav-cta">
          <Button variant="primary" size="sm">Get a quote</Button>
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="nav-hamburger"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: 'var(--text-primary)',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="nav-mobile-menu" style={{
          background: 'var(--neutral-0)',
          borderTop: '1px solid var(--border-default)',
          padding: '8px 0 16px',
        }}>
          <div className="dillo-container" style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link key={l.key} href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: '10px 0',
                    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15,
                    color: active ? 'var(--dillo-red-500)' : 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', marginTop: 8 }}>
              <Button variant="primary" size="md" block>Get a quote</Button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; margin-left: auto; }
          .nav-tagline { display: none; }
        }
      `}</style>
    </header>
  );
}
