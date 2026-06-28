import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  onDark?: boolean;
}

export default function SectionHeader({ eyebrow, title, description, align = 'left', onDark }: SectionHeaderProps) {
  const textColor = onDark ? 'var(--neutral-0)' : 'var(--text-primary)';
  const descColor = onDark ? 'rgba(255,255,255,0.78)' : 'var(--text-secondary)';
  return (
    <header style={{
      display: 'flex', flexDirection: 'column', gap: 14,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 'none',
      margin: align === 'center' ? '0 auto' : 0,
    }}>
      {eyebrow ? (
        <span style={{
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 13, letterSpacing: 'var(--ls-eyebrow)',
          textTransform: 'uppercase',
          color: 'var(--dillo-red-500)',
        }}>{eyebrow}</span>
      ) : null}
      <h2 style={{
        fontFamily: 'var(--font-heading)', fontWeight: 700,
        fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em',
        color: textColor, margin: 0,
      }}>{title}</h2>
      <hr style={{
        width: 64, height: 4, background: 'var(--dillo-red-500)',
        border: 0, margin: 0,
      }} />
      {description ? (
        <p style={{
          fontSize: 18, lineHeight: 1.55, color: descColor,
          margin: 0, maxWidth: 640,
        }}>{description}</p>
      ) : null}
    </header>
  );
}
