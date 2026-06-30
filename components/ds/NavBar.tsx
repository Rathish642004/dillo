'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import AnnouncementBar from './AnnouncementBar';

const links = [
  { key: 'home',      label: 'Home',      href: '/'          },
  { key: 'about',     label: 'About',     href: '/about'     },
  { key: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  { key: 'contact',   label: 'Contact',   href: '/contact'   },
];

const productCategories = [
  { label: 'Healthcare',      href: '/products/healthcare'  },
  { label: 'Hospitality',     href: '/products/hospitality' },
  { label: 'School',          href: '/products/educational' },
  { label: 'Industrial',      href: '/products/industrial'  },
  { label: 'Corporate',       href: '/products/corporate'   },
];

export default function NavBar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = React.useState(false);
  const dropdownTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);
  const productsActive = pathname.startsWith('/products');

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  const navLinkStyle = (active: boolean): React.CSSProperties => ({
    position: 'relative',
    padding: '10px 14px',
    fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14,
    color: active ? 'var(--dillo-red-500)' : 'var(--text-primary)',
    textDecoration: 'none',
    borderRadius: 'var(--radius-md)',
    display: 'inline-flex', alignItems: 'center',
    background: 'none', border: 'none', cursor: 'pointer',
  });

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--neutral-0)',
      borderBottom: `1px solid ${scrolled ? 'var(--border-default)' : 'transparent'}`,
      boxShadow: scrolled ? 'var(--shadow-xs)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    }}>
      <AnnouncementBar />
      <div className="dillo-container" style={{ display: 'flex', alignItems: 'center', gap: 24, height: 72 }}>
        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src="/logo.jpeg"
            alt="Dillo Uniforms — The Perfect Uniform Makers"
            style={{ height: 48, width: 'auto', display: 'block' }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4, marginLeft: 'auto' }} className="nav-desktop">
          {/* Home + About */}
          {links.slice(0, 2).map((l) => {
            const active = isActive(l.href);
            return (
              <Link key={l.key} href={l.href} style={navLinkStyle(active)}>
                {l.label}
                {active && (
                  <span style={{
                    position: 'absolute', left: 14, right: 14, bottom: 4,
                    height: 3, background: 'var(--dillo-red-500)',
                  }} />
                )}
              </Link>
            );
          })}

          {/* Products dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button style={navLinkStyle(productsActive)}>
              Products
              <svg
                width="12" height="12" viewBox="0 0 12 12" fill="currentColor"
                style={{ marginLeft: 5, opacity: 0.7, transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}
                aria-hidden
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
              {productsActive && (
                <span style={{
                  position: 'absolute', left: 14, right: 14, bottom: 4,
                  height: 3, background: 'var(--dillo-red-500)',
                }} />
              )}
            </button>

            {dropdownOpen && (
              <div
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
                style={{
                  position: 'absolute', top: 'calc(100% + 4px)', left: 0,
                  background: 'var(--neutral-0)',
                  border: '1px solid var(--border-default)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                  padding: '8px',
                  minWidth: 200,
                  zIndex: 100,
                  animation: 'dropdown-in 0.15s ease-out',
                }}
              >
                {productCategories.map((cat) => {
                  const catActive = pathname === cat.href;
                  return (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setDropdownOpen(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '9px 12px',
                        borderRadius: 'var(--radius-md)',
                        fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13,
                        color: catActive ? 'var(--dillo-red-500)' : 'var(--text-primary)',
                        textDecoration: 'none',
                        background: catActive ? 'var(--dillo-red-50)' : 'transparent',
                        transition: 'background 0.15s',
                      }}
                      onMouseEnter={(e) => { if (!catActive) e.currentTarget.style.background = 'var(--neutral-100)'; }}
                      onMouseLeave={(e) => { if (!catActive) e.currentTarget.style.background = 'transparent'; }}
                    >
                      {catActive && (
                        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--dillo-red-500)', flexShrink: 0 }} />
                      )}
                      {cat.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Portfolio + Contact */}
          {links.slice(2).map((l) => {
            const active = isActive(l.href);
            return (
              <Link key={l.key} href={l.href} style={navLinkStyle(active)}>
                {l.label}
                {active && (
                  <span style={{
                    position: 'absolute', left: 14, right: 14, bottom: 4,
                    height: 3, background: 'var(--dillo-red-500)',
                  }} />
                )}
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
            {/* Home + About */}
            {links.slice(0, 2).map((l) => (
              <Link key={l.key} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 0',
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15,
                  color: isActive(l.href) ? 'var(--dillo-red-500)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >{l.label}</Link>
            ))}

            {/* Products expandable */}
            <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                style={{
                  width: '100%', padding: '10px 0',
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15,
                  color: productsActive ? 'var(--dillo-red-500)' : 'var(--text-primary)',
                  background: 'none', border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}
              >
                Products
                <svg
                  width="14" height="14" viewBox="0 0 12 12" fill="none"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  style={{ transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}
                  aria-hidden
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>
              {mobileProductsOpen && (
                <div style={{ paddingBottom: 8 }}>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      onClick={() => setMenuOpen(false)}
                      style={{
                        display: 'block',
                        padding: '8px 0 8px 16px',
                        fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14,
                        color: pathname === cat.href ? 'var(--dillo-red-500)' : 'var(--text-secondary)',
                        textDecoration: 'none',
                        borderLeft: pathname === cat.href ? '2px solid var(--dillo-red-500)' : '2px solid transparent',
                      }}
                    >{cat.label}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Portfolio + Contact */}
            {links.slice(2).map((l) => (
              <Link key={l.key} href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '10px 0',
                  fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 15,
                  color: isActive(l.href) ? 'var(--dillo-red-500)' : 'var(--text-primary)',
                  textDecoration: 'none',
                  borderBottom: '1px solid var(--border-subtle)',
                }}
              >{l.label}</Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{ marginTop: 8, textDecoration: 'none' }}
            >
              <Button variant="primary" size="md" style={{ width: '100%' }}>Get a quote</Button>
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @keyframes dropdown-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: flex !important; margin-left: auto; }
        }
      `}</style>
    </header>
  );
}
