'use client';

import React from 'react';
import Button from './Button';

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  badge?: string;
  items?: string[];
  ctaLabel?: string;
  onCta?: () => void;
}

export default function ProductCard({ title, description, imageSrc, badge, items = [], ctaLabel = 'Explore', onCta }: ProductCardProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        boxShadow: hover ? '0 8px 28px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.06)',
        transform: hover ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'transform 0.22s ease, box-shadow 0.22s ease',
        display: 'flex', flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {/* Portrait image — 3:4 aspect ratio */}
      <div style={{
        position: 'relative',
        paddingBottom: '133%',
        background: imageSrc ? `center/cover no-repeat url(${imageSrc})` : 'var(--dillo-navy-100)',
        overflow: 'hidden',
      }}>
        {!imageSrc && (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--dillo-navy-300)', fontFamily: 'var(--font-heading)',
            fontWeight: 700, fontSize: 15,
          }}>
            {title}
          </div>
        )}
        {/* Top-left badge */}
        {badge && (
          <span style={{
            position: 'absolute', top: 10, left: 10, zIndex: 1,
            background: '#fff', color: 'var(--text-primary)',
            padding: '4px 12px', borderRadius: 'var(--radius-pill)',
            fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
            boxShadow: '0 1px 6px rgba(0,0,0,0.14)',
            letterSpacing: '0.01em',
          }}>{badge}</span>
        )}
      </div>

      {/* Text area */}
      <div style={{ padding: '14px 16px 18px', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
        <h3 style={{ fontSize: 17, margin: 0, fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3 }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: 13, lineHeight: 1.5 }}>{description}</p>
        {items.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 2 }}>
            {items.map((it) => (
              <span key={it} style={{
                fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-secondary)',
                background: 'var(--neutral-100)', padding: '3px 9px', borderRadius: 'var(--radius-pill)',
              }}>{it}</span>
            ))}
          </div>
        )}
        <div style={{ marginTop: 'auto', paddingTop: 10 }}>
          <Button variant="ghost" size="sm" onClick={onCta} iconRight={<span aria-hidden>→</span>}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
