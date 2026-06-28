import Link from 'next/link';
import type { Metadata } from 'next';
import Section from '@/components/ds/Section';
import SectionHeader from '@/components/ds/SectionHeader';
import StatCard from '@/components/ds/StatCard';
import ProcessStep from '@/components/ds/ProcessStep';
import Card from '@/components/ds/Card';
import Button from '@/components/ds/Button';
import { getStats, getIndustries, getProcessSteps } from '@/lib/queries';

export const metadata: Metadata = { title: 'About Us' };
export const revalidate = 3600;

export default async function AboutPage() {
  const [stats, industries, mfgSteps] = await Promise.all([
    getStats(),
    getIndustries(),
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
      {/* Hero */}
      <section style={{ background: 'var(--dillo-navy-500)', color: '#fff', padding: '120px 0 96px', position: 'relative', overflow: 'hidden' }}>
        <div className="dillo-container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className="dillo-eyebrow" style={{ color: 'var(--dillo-red-400)' }}>About Dillo</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: 0 }}>
              A family of stitchers, on the Mumbai floor since 2005.
            </h1>
            <hr style={{ width: 96, height: 6, background: 'var(--dillo-red-500)', border: 0, margin: '8px 0' }} />
            <p style={{ fontSize: 19, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', maxWidth: 560, fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>
              &ldquo;We&rsquo;ve never sold a uniform we wouldn&rsquo;t put on our own team.&rdquo;
            </p>
          </div>
          <div style={{
            height: 380,
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-xl)',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'var(--dillo-navy-600)',
          }} />
        </div>
      </section>

      {/* Story */}
      <Section tone="white" pad="lg">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 48, marginTop: 56 }}>
          {expStats.map((s) => s && (
            <StatCard key={s.id} value={s.value} label={s.metric} />
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section tone="white" pad="lg">
        <SectionHeader eyebrow="Industries we serve" title="Five verticals, decades of fluency." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, marginTop: 56 }}>
          {industries.map((ind) => (
            <Card key={ind.id} pad="md" interactive>
              <h3 style={{ fontSize: 18, margin: '0 0 8px' }}>{ind.name}</h3>
              <p style={{ margin: 0, fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{ind.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Manufacturing */}
      <Section tone="alt" pad="lg">
        <SectionHeader eyebrow="Manufacturing process" title="What happens on our floor." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 32, marginTop: 56 }}>
          {mfgSteps.map((s) => (
            <ProcessStep
              key={s.id}
              number={String(s.step_number).padStart(2, '0')}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
        <div style={{
          marginTop: 64,
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16,
          borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)',
        }}>
          {['Fabric sourcing', 'Stitching floor', 'QC & dispatch'].map((label) => (
            <div key={label} style={{
              height: 240,
              background: 'var(--dillo-navy-100)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--dillo-navy-400)',
            }}>{label}</div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="red" pad="md">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <h2 style={{ color: '#fff', margin: 0, fontFamily: 'var(--font-display)', fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
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
