'use client';

import { useState, useEffect } from 'react';

const messages = [
  '38 quote requests received this week',
  'Last delivery: 500 scrubs to Fortis Hospitals, Mumbai',
  'New client this month: Taj Hotel Group, New Delhi',
  '1,200 school uniforms delivered across 4 campuses this week',
  'Currently serving 450+ clients across India',
];

export default function SocialProofTicker() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: 'var(--dillo-navy-500)',
      padding: '10px 0',
      overflow: 'hidden',
    }}>
      <div className="dillo-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <span style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#4ade80',
          flexShrink: 0,
          boxShadow: '0 0 0 2px rgba(74,222,128,0.3)',
          display: 'inline-block',
        }} />
        <p style={{
          margin: 0,
          fontSize: 13,
          fontFamily: 'var(--font-heading)',
          fontWeight: 600,
          color: 'rgba(255,255,255,0.9)',
          letterSpacing: '0.02em',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s ease',
          textAlign: 'center',
        }}>
          {messages[index]}
        </p>
      </div>
    </div>
  );
}
