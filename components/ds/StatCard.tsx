import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  icon?: React.ReactNode;
  onDark?: boolean;
}

export default function StatCard({ value, label, icon, onDark }: StatCardProps) {
  const color = onDark ? 'var(--neutral-0)' : 'var(--text-primary)';
  const sub = onDark ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)';
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 8,
      paddingLeft: 20,
      borderLeft: '4px solid var(--dillo-red-500)',
    }}>
      {icon ? <div style={{ color, marginBottom: 4 }}>{icon}</div> : null}
      <div className="stat-card-value" style={{
        fontFamily: 'var(--font-display)',
        lineHeight: 1,
        color,
        letterSpacing: '-0.02em',
      }}>{value}</div>
      <div style={{
        fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 600,
        letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
        color: sub,
      }}>{label}</div>
    </div>
  );
}
