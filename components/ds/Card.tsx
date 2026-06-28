'use client';

import React from 'react';

type CardPad = 'none' | 'sm' | 'md' | 'lg';
type CardVariant = 'default' | 'raised' | 'outline' | 'navy';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  pad?: CardPad;
  variant?: CardVariant;
  interactive?: boolean;
}

const pads: Record<CardPad, number> = { none: 0, sm: 16, md: 24, lg: 32 };

const variants: Record<CardVariant, { background: string; border: string; shadow: string; color?: string }> = {
  default: { background: 'var(--surface-card)', border: '1px solid var(--border-default)', shadow: 'var(--shadow-xs)' },
  raised:  { background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',  shadow: 'var(--shadow-md)' },
  outline: { background: 'var(--surface-card)', border: '1px solid var(--border-strong)',  shadow: 'none' },
  navy:    { background: 'var(--dillo-navy-500)', border: '1px solid var(--dillo-navy-500)', shadow: 'var(--shadow-md)', color: 'var(--neutral-0)' },
};

export default function Card({ pad = 'md', variant = 'default', interactive, style, children, ...rest }: CardProps) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant];
  return (
    <div
      {...rest}
      onMouseEnter={(e) => { setHover(true); rest.onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); rest.onMouseLeave?.(e); }}
      style={{
        position: 'relative',
        background: v.background,
        color: v.color || 'var(--text-primary)',
        border: v.border,
        borderRadius: 'var(--radius-lg)',
        padding: pads[pad],
        boxShadow: interactive && hover ? 'var(--shadow-lg)' : v.shadow,
        cursor: interactive ? 'pointer' : 'default',
        transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        transform: interactive && hover ? 'translateY(-2px)' : 'translateY(0)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {children}
      {interactive ? (
        <span style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          height: 3,
          background: 'var(--dillo-red-500)',
          transform: hover ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform var(--dur-base) var(--ease-out)',
        }} />
      ) : null}
    </div>
  );
}
