'use client';

import React from 'react';
import Link from 'next/link';

interface MobileCtaBarProps {
  phone: string;
  whatsapp: string;
}

export default function MobileCtaBar({ phone, whatsapp }: MobileCtaBarProps) {
  const [shown, setShown] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setShown(window.scrollY > 200);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const waNumber = whatsapp.replace(/\D/g, '');
  const waHref = `https://wa.me/${waNumber}?text=Hi%2C%20I%27m%20interested%20in%20Dillo%20Uniforms`;

  const labelStyle: React.CSSProperties = {
    fontSize: 11,
    fontFamily: 'var(--font-heading)',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    margin: 0,
  };

  const buttonBase: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    color: '#fff',
    textDecoration: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: 0,
  };

  return (
    <>
      <div
        className="mobile-cta-bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          display: 'flex',
          background: 'var(--dillo-navy-500)',
          height: 60,
          paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          transform: shown ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 300ms ease',
        }}
      >
        {/* WhatsApp */}
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...buttonBase, background: '#25D366', borderRight: '1px solid rgba(255,255,255,0.3)' }}
          aria-label="Chat on WhatsApp"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span style={labelStyle}>WhatsApp</span>
        </a>

        {/* Call */}
        <a
          href={`tel:${phone}`}
          style={{ ...buttonBase, background: 'var(--dillo-navy-500)', borderRight: '1px solid rgba(255,255,255,0.3)' }}
          aria-label="Call us"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C9.4 21 3 14.6 3 6.5c0-.6.4-1 1-1H8c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.8.7z" />
          </svg>
          <span style={labelStyle}>Call Us</span>
        </a>

        {/* Get Quote */}
        <Link
          href="/contact"
          style={{ ...buttonBase, background: 'var(--dillo-red-500)' }}
          aria-label="Get a quote"
        >
          <span style={{ ...labelStyle, fontSize: 13 }}>Get a Quote</span>
        </Link>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .mobile-cta-bar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
