'use client';

import React from 'react';

type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'navy';
type IconButtonSize = 'sm' | 'md' | 'lg';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label': string;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
}

const sizes: Record<IconButtonSize, number> = { sm: 32, md: 40, lg: 48 };

const variants: Record<IconButtonVariant, { bg: string; color: string; border: string; hover: string }> = {
  primary:   { bg: 'var(--dillo-red-500)',  color: 'var(--neutral-0)',      border: 'var(--dillo-red-500)',  hover: 'var(--dillo-red-600)' },
  navy:      { bg: 'var(--dillo-navy-500)', color: 'var(--neutral-0)',      border: 'var(--dillo-navy-500)', hover: 'var(--dillo-navy-600)' },
  secondary: { bg: 'var(--neutral-0)',      color: 'var(--dillo-navy-500)', border: 'var(--border-default)', hover: 'var(--neutral-100)' },
  ghost:     { bg: 'transparent',           color: 'var(--dillo-navy-500)', border: 'transparent',           hover: 'var(--neutral-100)' },
};

export default function IconButton({ variant = 'secondary', size = 'md', style, children, onMouseEnter, onMouseLeave, ...rest }: IconButtonProps) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant];
  const d = sizes[size];
  return (
    <button
      {...rest}
      onMouseEnter={(e) => { setHover(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); onMouseLeave?.(e); }}
      style={{
        width: d, height: d, padding: 0,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--radius-md)',
        background: hover ? v.hover : v.bg,
        color: v.color,
        border: `1px solid ${v.border}`,
        cursor: 'pointer',
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
