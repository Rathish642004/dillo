import Link from 'next/link';
import type { Metadata } from 'next';
import Section from '@/components/ds/Section';
import SectionHeader from '@/components/ds/SectionHeader';
import StatCard from '@/components/ds/StatCard';
import ProcessStep from '@/components/ds/ProcessStep';
import Button from '@/components/ds/Button';
import { getStats, getProcessSteps } from '@/lib/queries';

export const metadata: Metadata = { title: 'About Us' };
export const revalidate = 3600;

export default async function AboutPage() {
  const [stats, mfgSteps] = await Promise.all([
    getStats(),
    getProcessSteps('manufacturing'),
  ]);

  const expStats = [
    stats.find((s) => s.metric.toLowerCase().includes('year')),
    stats.find((s) => s.metric.toLowerCase().includes('uniform')),
    stats.find((s) => s.metric.toLowerCase().includes('machine')),
    stats.find((s) => s.metric.toLowerCase().includes('state')),
  ].filter(Boolean);

  return (
    <>
      <style>{`
        .about-hero-pad { padding: 120px 0 96px; }
        @media (max-width: 768px) { .about-hero-pad { padding: 72px 0 56px; } }
        @media (max-width: 480px) { .about-hero-pad { padding: 56px 0 40px; } }

        .about-hero-img {
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-xl);
          border: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 640px) {
          /* Pull image out of grid flow → absolute background layer */
          .about-hero-img {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            border-radius: 0;
            box-shadow: none;
            border: none;
            opacity: 0.35;
            z-index: 0;
          }
          /* Keep text above the image layer */
          .about-hero-text {
            position: relative;
            z-index: 1;
          }
        }

        /* Manufacturing step cards */
        .mfg-step-card   { position: relative; }
        .mfg-step-bg     { display: none; }
        .mfg-step-overlay{ display: none; }

        @media (max-width: 640px) {
          .mfg-step-card {
            min-height: 240px;
            padding: 24px;
            border-radius: var(--radius-lg);
            overflow: hidden;
            display: flex;
            align-items: flex-start;
          }
          .mfg-step-bg {
            display: block;
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
            z-index: 0;
          }
          .mfg-step-overlay {
            display: block;
            position: absolute;
            inset: 0;
            background: linear-gradient(160deg, rgba(10,22,56,0.82) 0%, rgba(10,22,56,0.65) 100%);
            z-index: 0;
          }
          .mfg-step-content {
            position: relative;
            z-index: 1;
          }
          /* Override CSS vars so ProcessStep text goes white */
          .mfg-step-card {
            --text-primary: #ffffff;
            --text-secondary: rgba(255,255,255,0.78);
          }
          /* Hide the image gallery strip — images already show behind steps */
          .mfg-floor-grid { display: none !important; }
        }
      `}</style>
      {/* Hero */}
      <section className="about-hero-pad" style={{ background: 'var(--dillo-navy-500)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div className="dillo-container about-hero-grid">
          <div className="about-hero-text" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className="dillo-eyebrow" style={{ color: 'var(--dillo-red-400)' }}>About Dillo</span>
            <h1 className="page-h1" style={{ fontFamily: 'var(--font-display)', color: '#fff' }}>
              A family of stitchers, on the Mumbai floor since 2005.
            </h1>
            <hr style={{ width: 96, height: 6, background: 'var(--dillo-red-500)', border: 0, margin: '8px 0' }} />
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', maxWidth: 560, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              &ldquo;We&rsquo;ve never sold a uniform we wouldn&rsquo;t put on our own team.&rdquo;
            </p>
          </div>
          <div className="about-hero-img" style={{
            background: `center/cover url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80)`,
          }} />
        </div>
      </section>

      {/* Story */}
      <Section tone="white" pad="lg">
        <div className="story-content-grid">
          <SectionHeader eyebrow="Our story" title="Twenty years of stitching." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20, color: 'var(--text-primary)', fontSize: 17, lineHeight: 1.7 }}>
            <p>Dillo started in 2005 as a 12-machine workshop in Andheri East, stitching scrubs for a single local hospital. Twenty years on, we run a 240-machine floor and ship to 450 clients across India — but the founding family is still on the floor every morning.</p>
            <p>We don&rsquo;t outsource. Every uniform that ships under the Dillo banner is cut, stitched and finished in our own factory, by people we know by name. That&rsquo;s why we can promise a fabric grade across six hospitals or a stitch tolerance across four thousand school shirts — we can see it happening.</p>
          </div>
        </div>
      </Section>

      {/* Experience */}
      <Section tone="alt" pad="lg">
        <SectionHeader eyebrow="Our experience" title="By the numbers." />
        <div className="grid-4" style={{ gap: 48, marginTop: 56 }}>
          {expStats.map((s) => s && (
            <StatCard key={s.id} value={s.value} label={s.metric} />
          ))}
        </div>
      </Section>

      {/* Manufacturing */}
      <Section tone="alt" pad="lg">
        <SectionHeader eyebrow="Manufacturing process" title="What happens on our floor." />
        {(() => {
          const mfgImages = [
            'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80',
            'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1400&q=80',
            'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80',
          ];
          return (
            <>
              <div className="grid-5" style={{ gap: 32, marginTop: 56 }}>
                {mfgSteps.map((s, idx) => (
                  <div key={s.id} className="mfg-step-card">
                    {/* Background image — visible only on mobile */}
                    <div
                      className="mfg-step-bg"
                      style={{ backgroundImage: `url(${mfgImages[idx % mfgImages.length]})` }}
                    />
                    {/* Dark overlay — visible only on mobile */}
                    <div className="mfg-step-overlay" />
                    {/* Step content */}
                    <div className="mfg-step-content">
                      <ProcessStep
                        number={String(s.step_number).padStart(2, '0')}
                        title={s.title}
                        description={s.description}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* Image strip — hidden on mobile (images show behind steps there) */}
              <div className="mfg-floor-grid" style={{ marginTop: 64 }}>
                {mfgImages.map((src) => (
                  <div key={src} style={{
                    height: 240,
                    background: `center/cover url(${src})`,
                  }} />
                ))}
              </div>
            </>
          );
        })()}
      </Section>

      {/* CTA */}
      <Section tone="red" pad="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 className="cta-h2" style={{ color: '#fff', fontFamily: 'var(--font-display)' }}>
            Tour our floor — virtually or in person.
          </h2>
          <Link href="/contact">
            <Button variant="navy" size="lg">Get in touch</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
