import React from 'react';

const badges = [
  { label: 'ISO 9001:2015', icon: '✓' },
  { label: 'OEKO-TEX Standard', icon: '✓' },
  { label: 'Make in India', icon: '✓' },
  { label: 'GST Registered', icon: '✓' },
  { label: '20+ Years Experience', icon: '✓' },
];

export default function TrustBadges() {
  return (
    <section
      style={{
        background: 'var(--dillo-navy-500)',
        padding: '20px 0',
        borderBottom: '2px solid var(--dillo-red-500)',
      }}
    >
      <div className="dillo-container">
        <div className="trust-badges-row">
          {badges.map((b, i) => (
            <React.Fragment key={b.label}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  color: '#fff',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  style={{
                    color: 'var(--dillo-red-400)',
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {b.icon}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 13,
                    letterSpacing: '0.02em',
                  }}
                >
                  {b.label}
                </span>
              </div>
              {i < badges.length - 1 && (
                <div
                  style={{
                    width: 1,
                    height: 20,
                    background: 'rgba(255,255,255,0.2)',
                    flexShrink: 0,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
      <style>{`
        .trust-badges-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .trust-badges-row::-webkit-scrollbar { display: none; }
        @media (max-width: 768px) {
          .trust-badges-row { justify-content: flex-start; padding-bottom: 4px; }
        }
      `}</style>
    </section>
  );
}
