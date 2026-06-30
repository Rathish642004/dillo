'use client';

import React from 'react';

const MESSAGES = [
  'Free fabric samples on your first order — request yours today',
  '24-hour quote turnaround for bulk orders of 50 pieces or more',
  'GST-registered supplier · ISO quality standards · Trusted since 2005',
];

const SESSION_KEY = 'dillo_bar_dismissed';

export default function AnnouncementBar() {
  const [dismissed, setDismissed] = React.useState(false);
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  // Read sessionStorage on mount to hide immediately if already dismissed
  React.useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem(SESSION_KEY) === '1') {
      setDismissed(true);
    }
  }, []);

  // Cycle messages every 4 seconds with a brief opacity fade
  React.useEffect(() => {
    if (dismissed) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 200);
    }, 4000);

    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setDismissed(true);
  };

  return (
    <>
      <div
        style={{
          width: '100%',
          background: 'var(--dillo-red-500)',
          color: '#fff',
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
        className="announcement-bar"
      >
        <p
          style={{
            fontSize: 13,
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            letterSpacing: '0.02em',
            textAlign: 'center',
            padding: '0 40px',
            margin: 0,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          {MESSAGES[index]}
        </p>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          style={{
            position: 'absolute',
            right: 12,
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.8)',
            cursor: 'pointer',
            fontSize: 18,
            padding: '4px 8px',
            lineHeight: 1,
          }}
        >
          &times;
        </button>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .announcement-bar {
            height: 36px !important;
            font-size: 12px !important;
          }
          .announcement-bar p {
            font-size: 12px !important;
          }
        }
      `}</style>
    </>
  );
}
