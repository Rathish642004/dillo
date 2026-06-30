'use client';

import { useState } from 'react';

interface WhatsAppWidgetProps {
  phone?: string;
  message?: string;
}

const OPTIONS = [
  { label: 'Healthcare uniforms',  text: "Hi Dillo, I need healthcare uniforms (scrubs/coats) for my hospital. Please share pricing and fabric options." },
  { label: 'Hospitality uniforms', text: "Hi Dillo, I need hospitality uniforms for my hotel or restaurant. Please share your catalogue and pricing." },
  { label: 'School uniforms',      text: "Hi Dillo, I need school uniforms in bulk. Please share pricing, fabric options and MOQ details." },
  { label: 'Corporate / T-shirts', text: "Hi Dillo, I need corporate uniforms or branded t-shirts. Please share details and pricing." },
  { label: 'Custom requirement',   text: "Hi Dillo, I have a specific uniform requirement. Can we schedule a call to discuss?" },
];

const waUrl = (phone: string, text: string) =>
  `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`;

export default function WhatsAppWidget({ phone }: WhatsAppWidgetProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="wa-widget-root"
        style={{
          position: 'fixed',
          right: 24,
          bottom: 24,
          zIndex: 60,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
        }}
      >
        {open && (
          <div
            style={{
              background: '#fff',
              width: 260,
              boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
              border: '1px solid var(--border-default)',
              overflow: 'hidden',
              animation: 'wa-card-in 0.25s ease-out',
            }}
          >
            {/* Card header */}
            <div
              style={{
                background: '#25D366',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  color: '#fff',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Quick inquiry
              </span>
              <button
                onClick={() => setOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.85)',
                  cursor: 'pointer',
                  fontSize: 18,
                  lineHeight: 1,
                  padding: 2,
                }}
              >
                ×
              </button>
            </div>
            {/* Message options */}
            <div style={{ padding: '8px 0' }}>
              {OPTIONS.map((opt) => (
                <a
                  key={opt.label}
                  href={waUrl(phone ?? '919820212345', opt.text)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '10px 16px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 13,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--border-subtle)',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  {opt.label} →
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Trigger button */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close WhatsApp menu' : 'Open WhatsApp quick inquiry'}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: '#25D366',
            color: '#fff',
            padding: '12px 18px',
            borderRadius: 'var(--radius-pill)',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 14,
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)';
          }}
        >
          {/* WhatsApp SVG icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.7 3.3.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
            <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.6 15.5 2 13.8 2 12 2 6.5 6.5 2 12 2c2.7 0 5.2 1 7.1 2.9C20.9 6.8 22 9.3 22 12c0 5.5-4.5 9.8-10 9.8z" />
          </svg>
          <span>WhatsApp us</span>
        </button>
      </div>
      <style>{`
        @keyframes wa-card-in {
          from { opacity: 0; transform: translateY(8px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* Hide entirely on mobile — MobileCtaBar handles WhatsApp there */
        @media (max-width: 768px) {
          .wa-widget-root { display: none !important; }
        }
      `}</style>
    </>
  );
}
