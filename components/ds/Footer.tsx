import React from 'react';
import Link from 'next/link';

interface FooterProps {
  info: Record<string, string>;
}

const colLabel: React.CSSProperties = {
  fontFamily: 'var(--font-heading)', fontWeight: 700,
  fontSize: 13, letterSpacing: 'var(--ls-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--dillo-red-400)',
};

const linkStyle: React.CSSProperties = {
  fontSize: 14, color: 'rgba(255,255,255,0.78)',
  textDecoration: 'none', padding: '4px 0',
  display: 'block',
};

export default function Footer({ info }: FooterProps) {
  return (
    <footer className="site-footer" style={{
      background: 'var(--dillo-navy-500)',
      color: 'var(--neutral-0)',
      paddingBottom: 24,
      borderTop: '4px solid var(--dillo-red-500)',
      position: 'relative',
    }}>
      <div className="dillo-container footer-grid">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <img
            src="/logo.jpeg"
            alt="Dillo Uniforms"
            className="footer-logo"
          />
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, lineHeight: 1.6, maxWidth: 320, marginTop: 8 }}>
            Stitching uniforms for hospitals, hotels, schools and factories across India since {info.founded_year ?? '2005'}.
          </p>
        </div>

        <div>
          <div style={colLabel}>Products</div>
          <div style={{ marginTop: 12 }}>
            <Link href="/products/healthcare"  style={linkStyle}>Healthcare</Link>
            <Link href="/products/hospitality" style={linkStyle}>Hospitality</Link>
            <Link href="/products/educational" style={linkStyle}>School</Link>
            <Link href="/products/industrial"  style={linkStyle}>Industrial</Link>
            <Link href="/products/corporate"   style={linkStyle}>Corporate T-Shirts</Link>
          </div>
        </div>

        <div>
          <div style={colLabel}>Company</div>
          <div style={{ marginTop: 12 }}>
            <Link href="/about"     style={linkStyle}>About</Link>
            <Link href="/portfolio" style={linkStyle}>Portfolio</Link>
            <Link href="/contact"   style={linkStyle}>Contact</Link>
          </div>
        </div>

        <div>
          <div style={colLabel}>Reach us</div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.78)' }}>
            <div>📍 {info.address ?? 'Plot 27, MIDC Phase II, Andheri East, Mumbai 400093'}</div>
            <div>📞 {info.phone ?? '+91 98202 12345'}</div>
            <div>📧 {info.email ?? 'hello@dillouniforms.com'}</div>
            <div>🕒 {info.working_hours ?? 'Mon–Sat · 9:30–18:30'}</div>
          </div>
        </div>
      </div>

      <div className="dillo-container" style={{
        marginTop: 56, paddingTop: 24,
        borderTop: '1px solid rgba(255,255,255,0.12)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontSize: 12, color: 'rgba(255,255,255,0.55)',
        flexWrap: 'wrap', gap: 8,
      }}>
        <div>© {new Date().getFullYear()} Dillo Uniforms Pvt. Ltd. All rights reserved.</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: 'rgba(255,255,255,0.55)' }}>Privacy</a>
          <a href="#" style={{ color: 'rgba(255,255,255,0.55)' }}>Terms</a>
        </div>
      </div>

      <style>{`
        .site-footer { padding-top: 40px; }
        .footer-logo {
          height: 48px; width: auto; display: block; max-width: 180px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 48px;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 480px) {
          .site-footer { padding-top: 20px; }
          /* 2-column grid so Products + Company sit side by side */
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 20px 16px; }
          /* Logo/about and Reach us each span the full row */
          .footer-grid > div:first-child { grid-column: 1 / -1; }
          .footer-grid > div:last-child  { grid-column: 1 / -1; }
          .footer-logo { height: 40px; max-width: 140px; }
        }
      `}</style>
    </footer>
  );
}
