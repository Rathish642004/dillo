'use client';

import { useState } from 'react';

interface Client {
  id: string;
  name: string;
  logo_url: string | null;
}

interface LogoMarqueeProps {
  clients: Client[];
}

function LogoItem({ client }: { client: Client }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 32px',
        height: 72,
        flexShrink: 0,
      }}
    >
      {client.logo_url ? (
        <img
          src={client.logo_url}
          alt={client.name}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            maxHeight: 36,
            maxWidth: 120,
            objectFit: 'contain',
            filter: hovered ? 'grayscale(0) opacity(1)' : 'grayscale(1) opacity(0.6)',
            transition: 'filter 0.25s',
          }}
        />
      ) : (
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 14,
            color: 'var(--neutral-400)',
            whiteSpace: 'nowrap',
          }}
        >
          {client.name}
        </span>
      )}
    </div>
  );
}

export default function LogoMarquee({ clients }: LogoMarqueeProps) {
  const [paused, setPaused] = useState(false);

  return (
    <section
      style={{
        background: 'var(--neutral-0)',
        padding: '40px 0',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Eyebrow */}
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        <span className="dillo-eyebrow">Trusted by India&rsquo;s leading organisations</span>
      </div>

      {/* Row 1: scrolls left */}
      <div style={{ overflow: 'hidden', marginBottom: 0 }}>
        <div
          className="marquee-row"
          style={{
            display: 'flex',
            animation: 'marquee-left 35s linear infinite',
            animationPlayState: paused ? 'paused' : 'running',
            width: 'max-content',
          }}
        >
          {[...clients, ...clients].map((c, i) => (
            <LogoItem key={i} client={c} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-row { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
