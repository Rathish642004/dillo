import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from '@/components/ds/Section';
import Button from '@/components/ds/Button';
import ProductGenderFilter from '@/components/site/ProductGenderFilter';
import {
  getProductCategoryBySlug,
  getProductCategories,
  getProductSpecs,
} from '@/lib/queries';

export const revalidate = 3600;

export async function generateStaticParams() {
  // Must not use cookies() — use the browser client which is safe at build time
  const { createClient } = await import('@/lib/supabase/client');
  const supabase = createClient();
  const { data } = await supabase
    .from('product_categories')
    .select('slug')
    .order('display_order');
  return (data ?? []).map((c: { slug: string }) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = await getProductCategoryBySlug(slug);
  return { title: cat ? `${cat.name} Uniforms` : 'Products' };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [cat, categories, specs] = await Promise.all([
    getProductCategoryBySlug(slug),
    getProductCategories(),
    getProductSpecs(),
  ]);

  if (!cat) notFound();

  const products = cat.products ?? [];

  return (
    <>
      <style>{`
        .prod-cat-nav {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          scrollbar-width: none;
          padding-bottom: 2px;
          margin-bottom: 32px;
        }
        .prod-cat-nav::-webkit-scrollbar { display: none; }

        .pcat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .pcat-item {
          border: 1px solid var(--border-subtle);
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .pcat-item:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.10);
          transform: translateY(-2px);
        }
        @media (max-width: 1024px) { .pcat-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 768px)  { .pcat-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; } }

        .pcat-specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 32px;
        }
        @media (max-width: 768px) { .pcat-specs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .pcat-specs-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Compact category header — name only, no description */}
      <section style={{
        background: 'var(--dillo-navy-500)',
        padding: '56px 0 40px',
        borderBottom: '4px solid var(--dillo-red-500)',
      }}>
        <div className="dillo-container">
          {/* Category nav pills */}
          <nav className="prod-cat-nav" aria-label="Product categories">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/products/${c.slug}`}
                style={{
                  display: 'inline-block',
                  padding: '8px 18px',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 13,
                  background: c.slug === slug ? 'var(--dillo-red-500)' : 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  borderRadius: 'var(--radius-pill)',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  border: c.slug === slug ? '1px solid var(--dillo-red-500)' : '1px solid rgba(255,255,255,0.2)',
                  transition: 'background 0.2s',
                }}
              >
                {c.name}
              </Link>
            ))}
          </nav>

          <span style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: 'var(--ls-eyebrow)',
            textTransform: 'uppercase',
            color: 'var(--dillo-red-400)',
          }}>Products</span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            color: '#fff',
            margin: '10px 0 0',
            fontSize: 'clamp(28px, 5vw, 52px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}>{cat.name}</h1>
          <hr style={{ width: 56, height: 4, background: 'var(--dillo-red-500)', border: 0, margin: '16px 0 0' }} />
        </div>
      </section>

      {/* Product grid with gender filter */}
      <Section tone="white" pad="lg">
        <ProductGenderFilter products={products} cat={cat} />
      </Section>

      {/* Specs */}
      {specs.length > 0 && (
        <Section tone="alt" pad="md">
          <div className="pcat-specs-grid">
            {specs.map((spec) => (
              <div key={spec.id} style={{
                padding: 20,
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: 'var(--radius-lg)',
                borderLeft: '4px solid var(--dillo-red-500)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 12,
                  textTransform: 'uppercase', letterSpacing: 'var(--ls-eyebrow)',
                  color: 'var(--text-muted)',
                }}>{spec.title}</div>
                <div style={{ marginTop: 6, fontSize: 15, color: 'var(--text-primary)' }}>{spec.value}</div>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section tone="navy" pad="md">
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: 24,
          color: '#fff', flexWrap: 'wrap',
        }}>
          <div>
            <h2 style={{
              color: '#fff', fontFamily: 'var(--font-display)',
              margin: 0, fontSize: 'clamp(22px, 3vw, 32px)',
            }}>Like what you see?</h2>
            <p style={{ margin: '8px 0 0', color: 'rgba(255,255,255,0.78)', fontSize: 15 }}>
              Request a stitched sample. We&rsquo;ll ship in 5&ndash;7 days.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="primary" size="lg">Request a sample</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
