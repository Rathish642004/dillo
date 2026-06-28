'use client';

import React from 'react';
import Button from './Button';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  items?: string[];
  ctaLabel?: string;
  onCta?: () => void;
}

export default function ProductCard({ title, description, imageSrc, items = [], ctaLabel = 'Explore', onCta }: ProductCardProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-xs)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <div style={{
        position: 'relative',
        height: 200,
        background: imageSrc ? `center/cover no-repeat url(${imageSrc})` : 'var(--dillo-navy-100)',
      }}>
        {!imageSrc && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--dillo-navy-300)', fontFamily: 'var(--font-mono)', fontSize: 12 }}>image</div>
        )}
        <div style={{
          position: 'absolute', left: 0, bottom: 0,
          background: 'var(--dillo-red-500)', color: 'var(--neutral-0)',
          padding: '6px 14px',
          fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
          letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
        }}>Uniforms</div>
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <h3 style={{ fontSize: 22, margin: 0, color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', margin: 0 }}>{description}</p>
        {items.length > 0 && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '4px 0 0', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {items.map((it) => (
              <li key={it} style={{
                fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-secondary)',
                background: 'var(--neutral-100)', padding: '4px 10px', borderRadius: 'var(--radius-pill)',
              }}>{it}</li>
            ))}
          </ul>
        )}
        <div style={{ marginTop: 'auto', paddingTop: 16 }}>
          <Button variant="ghost" size="sm" onClick={onCta} iconRight={<span aria-hidden>→</span>}>
            {ctaLabel}
          </Button>
        </div>
      </div>
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height: 4, background: 'var(--dillo-red-500)',
        transform: hover ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)',
      }} />
    </div>
  );
}
