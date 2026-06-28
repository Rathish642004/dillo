'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { ProductCategory, ProductSpec } from '@/lib/types';
import Section from '@/components/ds/Section';
import SectionHeader from '@/components/ds/SectionHeader';
import Button from '@/components/ds/Button';
import Card from '@/components/ds/Card';

interface ProductsClientProps {
  categories: ProductCategory[];
  specs: ProductSpec[];
  initialCategory?: string;
}

export default function ProductsClient({ categories, specs, initialCategory }: ProductsClientProps) {
  const validInitial = initialCategory && categories.some((c) => c.slug === initialCategory)
    ? initialCategory
    : categories[0]?.slug ?? 'healthcare';
  const [activeSlug, setActiveSlug] = useState(validInitial);
  const cat = categories.find((c) => c.slug === activeSlug) ?? categories[0];

  if (!cat) return null;

  return (
    <>
      {/* Sticky category nav */}
      <div style={{ position: 'sticky', top: 72, zIndex: 40, background: 'var(--neutral-0)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="dillo-container" style={{ display: 'flex', gap: 4, overflowX: 'auto', padding: '12px 0' }}>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiveSlug(c.slug)}
              style={{
                padding: '10px 18px',
                fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 14,
                background: activeSlug === c.slug ? 'var(--dillo-red-500)' : 'transparent',
                color: activeSlug === c.slug ? '#fff' : 'var(--text-primary)',
                border: activeSlug === c.slug ? '1px solid var(--dillo-red-500)' : '1px solid var(--border-default)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background var(--dur-base) var(--ease-out)',
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Category hero */}
      <section style={{ background: 'var(--bg-page-alt)', padding: '64px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="dillo-container" style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 48, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="dillo-eyebrow">Products</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>{cat.name}</h1>
            <hr style={{ width: 64, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: 0 }} />
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: 560 }}>{cat.description}</p>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <Link href="/contact">
                <Button variant="primary" size="lg">Request a sample</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">Talk to us</Button>
              </Link>
            </div>
          </div>
          <div style={{
            height: 360, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
            background: cat.image_url ? `center/cover url(${cat.image_url})` : 'var(--dillo-navy-100)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {!cat.image_url && (
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--dillo-navy-400)' }}>{cat.name}</span>
            )}
          </div>
        </div>
      </section>

      {/* Item grid */}
      <Section tone="white" pad="lg">
        <SectionHeader eyebrow="Catalogue" title="Pieces we make in this category." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 56 }}>
          {(cat.products ?? []).map((product) => (
            <Card key={product.id} pad="none" interactive>
              <div style={{
                height: 220,
                background: cat.image_url ? `center/cover url(${cat.image_url})` : 'var(--dillo-navy-50)',
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {product.badge && (
                  <span style={{
                    position: 'absolute', top: 12, left: 12,
                    background: 'var(--dillo-red-500)', color: '#fff',
                    padding: '4px 10px', borderRadius: 2,
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    fontSize: 11, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase' as const,
                  }}>{product.badge}</span>
                )}
                {!cat.image_url && (
                  <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--dillo-navy-300)', fontSize: 14 }}>{product.name}</span>
                )}
              </div>
              <div style={{ padding: 20 }}>
                <h3 style={{ fontSize: 18, margin: 0 }}>{product.name}</h3>
                <p style={{ margin: '8px 0 0', fontSize: 14, color: 'var(--text-secondary)' }}>
                  {product.price_text ?? ''}{product.moq ? ` · MOQ ${product.moq}` : ''}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Specs band */}
      <Section tone="alt" pad="md">
        <SectionHeader eyebrow="What you can spec" title="Built around your brief." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 40 }}>
          {specs.map((spec) => (
            <div key={spec.id} style={{
              padding: 20,
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid var(--dillo-red-500)',
            }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 13, textTransform: 'uppercase' as const, letterSpacing: 'var(--ls-eyebrow)', color: 'var(--text-muted)' }}>{spec.title}</div>
              <div style={{ marginTop: 6, fontSize: 16, color: 'var(--text-primary)' }}>{spec.value}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Products CTA */}
      <Section tone="navy" pad="md" bottomRule>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, color: '#fff', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)', fontSize: 36, letterSpacing: '-0.02em' }}>Like what you see?</h2>
            <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.78)' }}>Request a stitched sample. We&rsquo;ll ship in 5–7 days.</p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="lg">Request a sample</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
