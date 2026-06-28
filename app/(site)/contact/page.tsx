import type { Metadata } from 'next';
import ContactForm from '@/components/site/ContactForm';
import { getCompanyInfo } from '@/lib/queries';

export const metadata: Metadata = { title: 'Contact Us' };
export const revalidate = 3600;

export default async function ContactPage() {
  const info = await getCompanyInfo();

  return (
    <>
      {/* Hero */}
      <section style={{ background: 'var(--dillo-navy-500)', color: '#fff', padding: '96px 0 64px' }}>
        <div className="dillo-container" style={{ maxWidth: 880 }}>
          <span className="dillo-eyebrow" style={{ color: 'var(--dillo-red-400)' }}>Contact</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '12px 0 16px', color: '#fff' }}>
            Tell us what you need.
          </h1>
          <hr style={{ width: 96, height: 6, background: 'var(--dillo-red-500)', border: 0, margin: 0 }} />
          <p style={{ marginTop: 20, fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)' }}>
            A quote within 24 hours. A stitched sample within a week. Same family-run quality bar across every category.
          </p>
        </div>
      </section>

      {/* Form + sidebar */}
      <ContactForm info={info} />

      {/* Map */}
      <section style={{ height: 380, background: 'var(--bg-page-alt)', position: 'relative', overflow: 'hidden', borderTop: '1px solid var(--border-default)' }}>
        <iframe
          title="Dillo Uniforms — Andheri East, Mumbai"
          src="https://www.openstreetmap.org/export/embed.html?bbox=72.84%2C19.11%2C72.90%2C19.13&layer=mapnik&marker=19.12%2C72.87"
          style={{ width: '100%', height: '100%', border: 0, filter: 'saturate(0.85)' }}
          loading="lazy"
        />
        <div style={{
          position: 'absolute', left: 32, top: 32,
          padding: 20,
          background: 'var(--neutral-0)',
          border: '1px solid var(--border-default)',
          borderRadius: 'var(--radius-lg)',
          boxShadow: 'var(--shadow-lg)',
          maxWidth: 280,
        }}>
          <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: 16, color: 'var(--text-primary)' }}>Dillo Uniforms HQ</div>
          <div style={{ marginTop: 6, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {info.address ?? 'Plot 27, MIDC Phase II, Andheri East, Mumbai 400093'}
          </div>
          <hr className="dillo-rule" style={{ margin: '12px 0' }} />
          <a
            href={`https://www.openstreetmap.org/?mlat=19.12&mlon=72.87&zoom=15`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, color: 'var(--dillo-red-500)', textDecoration: 'none' }}
          >Get directions →</a>
        </div>
      </section>
    </>
  );
}
