'use client';

import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'navy' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  block?: boolean;
}

const sizes: Record<ButtonSize, { padding: string; fontSize: number; gap: number; height: number }> = {
  sm: { padding: '8px 14px',  fontSize: 14, gap: 6,  height: 36 },
  md: { padding: '12px 22px', fontSize: 15, gap: 8,  height: 44 },
  lg: { padding: '16px 28px', fontSize: 17, gap: 10, height: 56 },
};

const variants: Record<ButtonVariant, { background: string; color: string; border: string; hoverBg: string; hoverBorder: string }> = {
  primary: {
    background: 'var(--dillo-red-500)', color: 'var(--neutral-0)',
    border: '1px solid var(--dillo-red-500)',
    hoverBg: 'var(--dillo-red-600)', hoverBorder: 'var(--dillo-red-600)',
  },
  navy: {
    background: 'var(--dillo-navy-500)', color: 'var(--neutral-0)',
    border: '1px solid var(--dillo-navy-500)',
    hoverBg: 'var(--dillo-navy-600)', hoverBorder: 'var(--dillo-navy-600)',
  },
  secondary: {
    background: 'var(--neutral-0)', color: 'var(--dillo-navy-500)',
    border: '1px solid var(--dillo-navy-500)',
    hoverBg: 'var(--dillo-navy-50)', hoverBorder: 'var(--dillo-navy-500)',
  },
  ghost: {
    background: 'transparent', color: 'var(--dillo-navy-500)',
    border: '1px solid transparent',
    hoverBg: 'var(--neutral-100)', hoverBorder: 'transparent',
  },
  danger: {
    background: 'var(--dillo-red-600)', color: 'var(--neutral-0)',
    border: '1px solid var(--dillo-red-600)',
    hoverBg: 'var(--dillo-red-700)', hoverBorder: 'var(--dillo-red-700)',
  },
};

export default function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  block,
  style,
  children,
  disabled,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...rest
}: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = sizes[size];
  const v = variants[variant];

  return (
    <button
      {...rest}
      disabled={disabled}
      onMouseEnter={(e) => { setHover(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHover(false); setPress(false); onMouseLeave?.(e); }}
      onMouseDown={(e) => { setPress(true); onMouseDown?.(e); }}
      onMouseUp={(e) => { setPress(false); onMouseUp?.(e); }}
      style={{
        display: block ? 'flex' : 'inline-flex',
        width: block ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        fontFamily: 'var(--font-heading)',
        fontWeight: 700,
        fontSize: s.fontSize,
        letterSpacing: 0.1,
        lineHeight: 1,
        padding: s.padding,
        height: s.height,
        background: hover && !disabled ? v.hoverBg : v.background,
        color: v.color,
        border: hover && !disabled ? `1px solid ${v.hoverBorder}` : v.border,
        borderRadius: 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
        transform: press && !disabled ? 'translateY(1px)' : 'translateY(0)',
        boxShadow: 'none',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {iconLeft ? <span style={{ display: 'inline-flex' }}>{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span style={{ display: 'inline-flex' }}>{iconRight}</span> : null}
    </button>
  );
}
