import Link from 'next/link';

const industries = [
  { label: 'Healthcare',  href: '/products?cat=healthcare'  },
  { label: 'Hospitality', href: '/products?cat=hospitality' },
  { label: 'School',      href: '/products?cat=educational' },
  { label: 'Industrial',  href: '/products?cat=industrial'  },
  { label: 'Corporate',   href: '/products?cat=corporate'   },
];

export default function IndustryQuickSelect() {
  return (
    <section style={{ background: 'var(--neutral-0)', padding: '20px 0', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="dillo-container">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="industry-pills">
          <span style={{
            fontSize: 12,
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            whiteSpace: 'nowrap',
            marginRight: 4,
          }}>Jump to:</span>
          {industries.map((ind) => (
            <Link key={ind.label} href={ind.href} style={{
              display: 'inline-block',
              padding: '7px 18px',
              border: '1.5px solid var(--border-default)',
              borderRadius: 'var(--radius-pill)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 13,
              color: 'var(--text-primary)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s, color 0.2s, border-color 0.2s',
            }}>
              {ind.label}
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        .industry-pills {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding-bottom: 2px;
        }
        .industry-pills::-webkit-scrollbar { display: none; }
        .industry-pills a:hover {
          background: var(--dillo-navy-500) !important;
          color: #fff !important;
          border-color: var(--dillo-navy-500) !important;
        }
      `}</style>
    </section>
  );
}
