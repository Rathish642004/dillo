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
        <div className="dillo-container products-hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <span className="dillo-eyebrow">Products</span>
            <h1 className="products-h1" style={{ fontFamily: 'var(--font-display)' }}>{cat.name}</h1>
            <hr style={{ width: 64, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: 0 }} />
            <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', maxWidth: 560 }}>{cat.description}</p>
            <div className="btn-group" style={{ marginTop: 8 }}>
              <Link href="/contact">
                <Button variant="primary" size="lg">Request a sample</Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">Talk to us</Button>
              </Link>
            </div>
          </div>
          <div className="hide-mobile" style={{
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
        <div className="product-card-grid" style={{ marginTop: 40 }}>
          {(cat.products ?? []).map((product) => (
            <div key={product.id} className="product-card-item">
              {/* Portrait image — 3:4 aspect ratio */}
              <div style={{ position: 'relative', paddingBottom: '133%', overflow: 'hidden',
                background: cat.image_url ? `center/cover url(${cat.image_url})` : 'var(--dillo-navy-50)',
              }}>
                {product.badge && (
                  <span style={{
                    position: 'absolute', top: 10, left: 10, zIndex: 1,
                    background: '#fff', color: 'var(--text-primary)',
                    padding: '4px 12px', borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 11,
                    boxShadow: '0 1px 6px rgba(0,0,0,0.14)',
                  }}>{product.badge}</span>
                )}
                {!cat.image_url && (
                  <span style={{
                    position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--dillo-navy-300)', fontSize: 14,
                  }}>{product.name}</span>
                )}
              </div>
              {/* Text */}
              <div style={{ padding: '12px 14px 16px', background: '#fff' }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, margin: '0 0 4px', color: 'var(--text-primary)', lineHeight: 1.3 }}>{product.name}</h3>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)' }}>
                  {product.price_text ?? ''}{product.moq ? ` · MOQ ${product.moq}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .product-card-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 16px;
          }
          .product-card-item {
            border: 1px solid var(--border-subtle);
            overflow: hidden;
            transition: box-shadow 0.2s, transform 0.2s;
            cursor: pointer;
          }
          .product-card-item:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.10);
            transform: translateY(-2px);
          }
          @media (max-width: 1024px) { .product-card-grid { grid-template-columns: repeat(3, 1fr); } }
          @media (max-width: 768px)  { .product-card-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }
        `}</style>
      </Section>

      {/* Specs band */}
      <Section tone="alt" pad="md">
        <SectionHeader eyebrow="What you can spec" title="Built around your brief." />
        <div className="grid-3" style={{ marginTop: 40 }}>
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
            <h2 className="cta-h2" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>Like what you see?</h2>
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
