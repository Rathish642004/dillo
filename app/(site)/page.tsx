import Link from 'next/link';
import Section from '@/components/ds/Section';
import SectionHeader from '@/components/ds/SectionHeader';
import Button from '@/components/ds/Button';
import StatCard from '@/components/ds/StatCard';
import ProductCard from '@/components/ds/ProductCard';
import TestimonialCard from '@/components/ds/TestimonialCard';
import ProcessStep from '@/components/ds/ProcessStep';
import LogoMarquee from '@/components/site/LogoMarquee';
import HeroCarousel from '@/components/site/HeroCarousel';
import SocialProofTicker from '@/components/ds/SocialProofTicker';
import IndustryQuickSelect from '@/components/site/IndustryQuickSelect';
import TrustBadges from '@/components/ds/TrustBadges';
import RevealOnScroll from '@/components/ds/RevealOnScroll';
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
      <HeroCarousel heroStats={heroStats} />
      <SocialProofTicker />
      <IndustryQuickSelect />

      {/* Trusted By */}
      <LogoMarquee clients={clients} />
      <TrustBadges />

      {/* Why Dillo */}
      <RevealOnScroll>
        <Section tone="white" pad="lg">
          <SectionHeader eyebrow="Why Dillo" title="Built to last. Delivered on time." />
          <div className="grid-4" style={{ marginTop: 56 }}>
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
      </RevealOnScroll>

      {/* Products */}
      <RevealOnScroll delay={50}>
        <Section tone="alt" pad="lg">
          <SectionHeader eyebrow="Our products" title="Five verticals, one quality bar." description="Pick a category — every one ships from the same Mumbai floor under the same QC team." />
          <div className="cat-card-grid" style={{ marginTop: 48 }}>
            {categories.map((cat) => (
              <Link key={cat.id} href="/products" style={{ textDecoration: 'none' }}>
                <ProductCard
                  title={cat.name}
                  description={cat.description ?? ''}
                  imageSrc={cat.image_url ?? undefined}
                  badge={cat.name}
                  items={cat.products?.slice(0, 3).map((p) => p.name) ?? []}
                  ctaLabel="Explore"
                />
              </Link>
            ))}
          </div>
          <style>{`
            .cat-card-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            @media (max-width: 1024px) { .cat-card-grid { grid-template-columns: repeat(3, 1fr); } }
            @media (max-width: 640px)  { .cat-card-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; } }
          `}</style>
        </Section>
      </RevealOnScroll>

      {/* How It Works */}
      <RevealOnScroll delay={100}>
        <Section tone="white" pad="lg">
          <SectionHeader eyebrow="How it works" title="From brief to delivery in four steps." />
          <div className="grid-4" style={{ gap: 48, marginTop: 56 }}>
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
      </RevealOnScroll>

      {/* Testimonials */}
      <RevealOnScroll delay={50}>
        <Section tone="alt" pad="lg">
          <SectionHeader eyebrow="Client testimonials" title="Twenty years, four hundred clients." />
          <div className="grid-3" style={{ marginTop: 56 }}>
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
      </RevealOnScroll>

      {/* CTA */}
      <RevealOnScroll>
        <Section tone="red" pad="md">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ color: '#fff', maxWidth: 720 }}>
              <h2 className="cta-h2" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>Ready to kit your team out?</h2>
              <p style={{ marginTop: 12, fontSize: 18, color: 'rgba(255,255,255,0.92)' }}>
                Tell us what you need — we&rsquo;ll quote within 24 hours.
              </p>
            </div>
            <div className="btn-group">
              <Link href="/contact">
                <Button variant="navy" size="lg">Get a quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.45)' }}>Contact us</Button>
              </Link>
            </div>
          </div>
        </Section>
      </RevealOnScroll>
    </>
  );
}
