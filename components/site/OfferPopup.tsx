'use client';

import React, { useEffect, useState } from 'react';

const STORAGE_KEY = 'dillo_offer_ts';
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export default function OfferPopup() {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && Date.now() - Number(stored) < SEVEN_DAYS_MS) return;
    const timer = setTimeout(() => setOpen(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setOpen(false);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In a real app this would POST to an API. For now just show thanks.
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setSubmitted(true);
    setTimeout(() => setOpen(false), 2000);
  }

  if (!open) return null;

  return (
    <>
      <style>{`
        @keyframes offer-fadein {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes offer-slidein {
          from { transform: translateY(100%); }
          to   { transform: translateY(0); }
        }
        .offer-panel {
          animation: offer-fadein 0.35s ease-out;
        }
        @media (max-width: 600px) {
          .offer-panel {
            position: fixed !important;
            bottom: 0 !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            padding: 32px 24px 40px !important;
            border-radius: 0 !important;
            animation: offer-slidein 0.35s ease-out;
          }
        }
      `}</style>

      {/* Overlay */}
      <div
        onClick={dismiss}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Panel */}
        <div
          className="offer-panel"
          onClick={e => e.stopPropagation()}
          style={{
            position: 'relative',
            background: '#fff',
            padding: 40,
            maxWidth: 480,
            width: 'calc(100% - 48px)',
          }}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Close offer"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 22,
              color: '#888',
              lineHeight: 1,
              padding: 4,
            }}
          >
            ×
          </button>

          {/* Eyebrow chip */}
          <div style={{
            display: 'inline-block',
            background: 'var(--dillo-red-500)',
            color: '#fff',
            padding: '3px 10px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-heading)',
            marginBottom: 16,
          }}>
            Limited offer
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 28,
            margin: '0 0 12px',
            color: 'var(--dillo-navy-500)',
            lineHeight: 1.2,
          }}>
            Get free fabric samples
          </h2>

          {/* Body */}
          <p style={{
            fontSize: 15,
            color: '#555',
            lineHeight: 1.65,
            margin: '0 0 24px',
          }}>
            Tell us your industry and we'll courier fabric swatches before you commit to a single stitch. No charge, no obligation.
          </p>

          {submitted ? (
            <div style={{ padding: '20px 0', textAlign: 'center' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
              <p style={{ fontWeight: 700, color: 'var(--dillo-navy-500)', fontSize: 17 }}>We'll be in touch shortly!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <input
                type="tel"
                placeholder="Your WhatsApp number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
                style={{
                  border: '1px solid #ddd',
                  padding: '12px 16px',
                  fontSize: 15,
                  fontFamily: 'var(--font-body)',
                  borderRadius: 0,
                  outline: 'none',
                  width: '100%',
                }}
              />
              <button
                type="submit"
                style={{
                  background: 'var(--dillo-red-500)',
                  color: '#fff',
                  border: 'none',
                  padding: '14px 24px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 15,
                  cursor: 'pointer',
                  letterSpacing: '0.04em',
                }}
              >
                Send me samples →
              </button>
              <button
                type="button"
                onClick={dismiss}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 13,
                  color: '#999',
                  textDecoration: 'underline',
                  padding: '4px 0',
                  fontFamily: 'var(--font-body)',
                }}
              >
                No thanks
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
