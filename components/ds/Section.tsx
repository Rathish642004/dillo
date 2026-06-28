import React from 'react';

type SectionTone = 'white' | 'alt' | 'navy' | 'red';
type SectionPad = 'md' | 'lg';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  pad?: SectionPad;
  bottomRule?: boolean;
}

const tones: Record<SectionTone, { background: string; color: string }> = {
  white: { background: 'var(--bg-page)',        color: 'var(--text-primary)' },
  alt:   { background: 'var(--bg-page-alt)',    color: 'var(--text-primary)' },
  navy:  { background: 'var(--dillo-navy-500)', color: 'var(--neutral-0)' },
  red:   { background: 'var(--dillo-red-500)',  color: 'var(--neutral-0)' },
};

const pads: Record<SectionPad, string> = { md: '64px 0', lg: '96px 0' };

export default function Section({ tone = 'white', pad = 'lg', bottomRule, children, style, ...rest }: SectionProps) {
  const t = tones[tone];
  return (
    <section {...rest} style={{
      background: t.background,
      color: t.color,
      padding: pads[pad],
      position: 'relative',
      ...style,
    }}>
      <div className="dillo-container">{children}</div>
      {bottomRule ? (
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          height: 6, background: 'var(--dillo-red-500)',
        }} />
      ) : null}
    </section>
  );
}
