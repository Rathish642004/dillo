import Link from 'next/link';
import Section from '@/components/ds/Section';
import SectionHeader from '@/components/ds/SectionHeader';
import Button from '@/components/ds/Button';
import StatCard from '@/components/ds/StatCard';
import ProductCard from '@/components/ds/ProductCard';
import TestimonialCard from '@/components/ds/TestimonialCard';
import ProcessStep from '@/components/ds/ProcessStep';
import {
  getStats,
  getClients,
  getValueProps,
  getTestimonials,
  getProductCategories,
  getProcessSteps,
} from '@/lib/queries';

export const revalidate = 3600;

export default async function HomePage() {
  const [stats, clients, valueProps, testimonials, categories, steps] = await Promise.all([
    getStats(),
    getClients(),
    getValueProps(),
    getTestimonials(),
    getProductCategories(),
    getProcessSteps('how_it_works'),
  ]);

  const heroStats = stats.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: 640, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'var(--dillo-navy-500)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,31,77,0.85) 0%, rgba(15,31,77,0.7) 50%, rgba(15,31,77,0.45) 100%)' }} />
        <div className="dillo-container" style={{ position: 'relative', paddingTop: 120, paddingBottom: 160 }}>
          <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 24, color: '#fff' }}>
            <span style={{
              display: 'inline-flex', alignSelf: 'flex-start',
              background: 'var(--dillo-red-500)', color: '#fff',
              padding: '4px 12px', borderRadius: 2,
              fontFamily: 'var(--font-heading)', fontWeight: 700,
              fontSize: 12, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase',
            }}>Trusted since 2005</span>
            <h1 className="hero-h1" style={{
              fontFamily: 'var(--font-display)',
              margin: 0, color: '#fff',
            }}>The perfect uniform.<br />Stitched on time.</h1>
            <hr style={{ width: 96, height: 6, background: 'var(--dillo-red-500)', border: 0, margin: 0 }} />
            <p style={{ fontSize: 20, lineHeight: 1.5, color: 'rgba(255,255,255,0.88)', maxWidth: 580 }}>
              Twenty years stitching uniforms for India&rsquo;s hospitals, hotels, classrooms and factory floors.
              From 50 pieces to 50,000 — same quality control either way.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
              <Link href="/contact">
                <Button variant="primary" size="lg" iconRight={<span aria-hidden>→</span>}>Get a quote</Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View our work</Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Quick stats strip */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          background: 'rgba(10,22,56,0.85)',
          borderTop: '4px solid var(--dillo-red-500)',
          backdropFilter: 'blur(8px)',
        }}>
          <div className="dillo-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, padding: '24px 0' }}>
            {heroStats.map((s) => (
              <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: 4, color: '#fff' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: 12, letterSpacing: 'var(--ls-eyebrow)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', fontFamily: 'var(--font-heading)', fontWeight: 700 }}>{s.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section style={{ background: 'var(--neutral-0)', padding: '48px 0', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="dillo-container">
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <span className="dillo-eyebrow">Trusted by</span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: 0,
            borderTop: '1px solid var(--border-subtle)',
            borderLeft: '1px solid var(--border-subtle)',
          }}>
            {clients.map((c) => (
              <div key={c.id} style={{
                padding: '28px 16px',
                borderRight: '1px solid var(--border-subtle)',
                borderBottom: '1px solid var(--border-subtle)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {c.logo_url ? (
                  <img src={c.logo_url} alt={c.name} style={{ maxHeight: 40, maxWidth: 120, objectFit: 'contain' }} />
                ) : (
                  <span style={{
                    fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: 16,
                    color: 'var(--neutral-400)', letterSpacing: 0.5, textAlign: 'center',
                  }}>{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Dillo */}
      <Section tone="white" pad="lg">
        <SectionHeader eyebrow="Why Dillo" title="Built to last. Delivered on time." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32, marginTop: 56 }}>
          {valueProps.map((vp, idx) => (
            <div key={vp.id} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{
                display: 'inline-flex', alignSelf: 'flex-start',
                width: 56, height: 56, borderRadius: 4,
                background: 'var(--dillo-red-50)', color: 'var(--dillo-red-500)',
                fontFamily: 'var(--font-display)', fontSize: 22,
                alignItems: 'center', justifyContent: 'center',
              }}>{vp.number}</span>
              <h3 style={{ fontSize: 20, margin: 0 }}>{vp.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{vp.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Numbers */}
      <Section tone="navy" pad="lg" bottomRule>
        <SectionHeader onDark eyebrow="Numbers that build trust" title="Two decades of stitched promise." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 48, marginTop: 56 }}>
          {stats.slice(0, 4).map((s) => (
            <StatCard key={s.id} value={s.value} label={s.metric} onDark />
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section tone="alt" pad="lg">
        <SectionHeader eyebrow="Our products" title="Five verticals, one quality bar." description="Pick a category — every one ships from the same Mumbai floor under the same QC team." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, marginTop: 56 }}>
          {categories.slice(0, 3).map((cat) => (
            <Link key={cat.id} href="/products" style={{ textDecoration: 'none' }}>
              <ProductCard
                title={cat.name}
                description={cat.description ?? ''}
                imageSrc={cat.image_url ?? undefined}
                items={cat.products?.slice(0, 3).map((p) => p.name) ?? []}
                ctaLabel="Explore"
              />
            </Link>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
          {categories.slice(3).map((cat) => (
            <Link key={cat.id} href="/products" style={{ textDecoration: 'none' }}>
              <ProductCard
                title={cat.name}
                description={cat.description ?? ''}
                imageSrc={cat.image_url ?? undefined}
                items={cat.products?.slice(0, 3).map((p) => p.name) ?? []}
                ctaLabel="Explore"
              />
            </Link>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section tone="white" pad="lg">
        <SectionHeader eyebrow="How it works" title="From brief to delivery in four steps." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 48, marginTop: 56 }}>
          {steps.map((s) => (
            <ProcessStep
              key={s.id}
              number={String(s.step_number).padStart(2, '0')}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section tone="alt" pad="lg">
        <SectionHeader eyebrow="Client testimonials" title="Twenty years, four hundred clients." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, marginTop: 56 }}>
          {testimonials.map((t) => (
            <TestimonialCard
              key={t.id}
              quote={t.quote}
              author={t.author}
              role={t.role}
              avatarSrc={t.avatar_url ?? undefined}
            />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="red" pad="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <div style={{ color: '#fff', maxWidth: 720 }}>
            <h2 style={{
              color: '#fff', margin: 0,
              fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em',
            }}>Ready to kit your team out?</h2>
            <p style={{ marginTop: 12, fontSize: 18, color: 'rgba(255,255,255,0.92)' }}>
              Tell us what you need — we&rsquo;ll quote within 24 hours.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link href="/contact">
              <Button variant="navy" size="lg">Get a quote</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)' }}>Contact us</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
