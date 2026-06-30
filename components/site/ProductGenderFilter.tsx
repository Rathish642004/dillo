'use client';

import React from 'react';
import type { Product, ProductCategory } from '@/lib/types';

type GenderFilter = 'all' | 'men' | 'women';

const FILTERS: { label: string; value: GenderFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Men', value: 'men' },
  { label: 'Women', value: 'women' },
];

interface Props {
  products: Product[];
  cat: ProductCategory;
}

export default function ProductGenderFilter({ products, cat }: Props) {
  const [active, setActive] = React.useState<GenderFilter>('all');

  // For 'men'/'women': show products tagged for that gender OR unisex.
  // Products with no gender tag appear only under 'all'.
  const filtered = active === 'all'
    ? products
    : products.filter((p) => p.gender === active || p.gender === 'unisex');

  return (
    <>
      {/* Gender filter pills */}
      <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 28,
        flexWrap: 'wrap',
      }}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              padding: '7px 20px',
              borderRadius: 'var(--radius-pill)',
              border: active === f.value
                ? '2px solid var(--dillo-red-500)'
                : '2px solid var(--border-default)',
              background: active === f.value ? 'var(--dillo-red-500)' : 'transparent',
              color: active === f.value ? '#fff' : 'var(--text-primary)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 13,
              cursor: 'pointer',
              transition: 'background 0.18s, border-color 0.18s, color 0.18s',
              letterSpacing: '0.01em',
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <p style={{ color: 'var(--text-secondary)', textAlign: 'center', padding: '48px 0' }}>
          {products.length === 0 ? 'Products coming soon.' : 'No products found.'}
        </p>
      ) : (
        <div className="pcat-grid">
          {filtered.map((product) => (
            <div key={product.id} className="pcat-item">
              <div style={{
                position: 'relative',
                paddingBottom: '133%',
                overflow: 'hidden',
                background: product.image_url
                  ? `center/cover url(${product.image_url})`
                  : cat.image_url
                  ? `center/cover url(${cat.image_url})`
                  : 'var(--dillo-navy-100)',
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
                {product.gender && product.gender !== 'unisex' && (
                  <span style={{
                    position: 'absolute', top: product.badge ? 38 : 10, right: 10, zIndex: 1,
                    background: 'var(--dillo-navy-500)', color: '#fff',
                    padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 10,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>{product.gender}</span>
                )}
                {!product.image_url && !cat.image_url && (
                  <span style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-heading)', fontWeight: 700,
                    color: 'var(--dillo-navy-300)', fontSize: 14,
                  }}>{product.name}</span>
                )}
              </div>
              <div style={{ padding: '12px 14px 16px', background: '#fff' }}>
                <h3 style={{
                  fontSize: 15, fontWeight: 700, margin: '0 0 4px',
                  color: 'var(--text-primary)', lineHeight: 1.3,
                }}>{product.name}</h3>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--text-secondary)' }}>
                  {product.price_text ?? ''}{product.moq ? ` · MOQ ${product.moq}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
