'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { PortfolioProject } from '@/lib/types';
import Section from '@/components/ds/Section';
import Button from '@/components/ds/Button';

interface PortfolioClientProps {
  projects: PortfolioProject[];
}

const VERTICALS = ['All', 'Healthcare', 'Hospitality', 'Educational', 'Industrial', 'Corporate'];

function ProjectCard({ p }: { p: PortfolioProject }) {
  const [hover, setHover] = useState(false);
  const qty = p.quantity.toLocaleString('en-IN') + ' pieces';

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
        transition: 'all var(--dur-base) var(--ease-out)',
        cursor: 'pointer',
      }}
    >
      <div style={{
        height: 240,
        background: p.image_url ? `center/cover url(${p.image_url})` : 'var(--dillo-navy-100)',
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {!p.image_url && (
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--dillo-navy-400)', fontSize: 14 }}>{p.vertical}</span>
        )}
        {p.image_url && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, transparent 50%, rgba(15,31,77,0.78) 100%)',
          }} />
        )}
        <span style={{
          position: 'absolute', top: 12, left: 12,
          background: 'var(--dillo-red-500)', color: '#fff',
          padding: '4px 10px', borderRadius: 2,
          fontFamily: 'var(--font-heading)', fontWeight: 700,
          fontSize: 11, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase' as const,
        }}>{p.vertical}</span>
        <div style={{
          position: 'absolute', left: 16, right: 16, bottom: 12,
          color: '#fff',
          fontFamily: 'var(--font-heading)', fontSize: 12, letterSpacing: 0.5,
          display: 'flex', justifyContent: 'space-between',
        }}>
          <span>{p.location}</span>
          <span>{p.year}</span>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ fontSize: 20, margin: 0 }}>{p.name}</h3>
        <div style={{ marginTop: 12, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--dillo-red-500)', letterSpacing: '-0.02em' }}>{qty}</span>
        </div>
        <div style={{ marginTop: 4, fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: 'var(--ls-eyebrow)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>delivered</div>
      </div>
    </div>
  );
}

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.vertical === active);

  return (
    <>
      <Section tone="white" pad="lg" style={{ paddingTop: 0 }}>
        {/* Filter bar */}
        <div className="dillo-container" style={{ display: 'flex', gap: 8, paddingTop: 32, flexWrap: 'wrap' }}>
          {VERTICALS.map((v) => (
            <button
              key={v}
              onClick={() => setActive(v)}
              style={{
                padding: '8px 14px',
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13,
                background: active === v ? 'var(--dillo-navy-500)' : 'transparent',
                color: active === v ? '#fff' : 'var(--text-primary)',
                border: `1px solid ${active === v ? 'var(--dillo-navy-500)' : 'var(--border-default)'}`,
                borderRadius: 'var(--radius-pill)',
                cursor: 'pointer',
              }}
            >{v}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 40 }}>
          {filtered.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="red" pad="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)', fontSize: 36, letterSpacing: '-0.02em' }}>
            Want yours on this page next?
          </h2>
          <Link href="/contact">
            <Button variant="navy" size="lg">Start a project</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
