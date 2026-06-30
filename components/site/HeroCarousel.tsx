'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ds/Button';
import AnimatedStat from '@/components/ds/AnimatedStat';

interface StatItem {
  id: string;
  value: string;
  metric: string;
}

interface HeroCarouselProps {
  heroStats: StatItem[];
}

const slides = [
  {
    eyebrow: 'Trusted since 2005',
    headline: 'The perfect uniform.\nStitched on time.',
    subtext:
      "Twenty years stitching uniforms for India's hospitals, hotels, classrooms and factory floors. From 50 pieces to 50,000 — same quality control either way.",
    primaryCta: { label: 'Get a quote', href: '/contact' },
    secondaryCta: { label: 'View our work', href: '/portfolio' },
    bgImage:
      'https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=1600&q=80',
  },
  {
    eyebrow: 'Hospitality uniforms',
    headline: 'Dressed to impress.\nEvery shift, every floor.',
    subtext:
      'From front desk to housekeeping — uniforms that carry your brand identity with consistent colour, cut and tailoring.',
    primaryCta: { label: 'Explore Hospitality', href: '/products?cat=hospitality' },
    secondaryCta: { label: 'See portfolio', href: '/portfolio' },
    bgImage:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
  },
  {
    eyebrow: 'School & corporate',
    headline: 'Uniform quality.\nAcross every campus.',
    subtext:
      'Bulk school and corporate uniforms with consistent colour, fit and fabric — delivered term on time, every time.',
    primaryCta: { label: 'Explore School Uniforms', href: '/products?cat=educational' },
    secondaryCta: { label: 'Get a quote', href: '/contact' },
    bgImage:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
  },
];

export default function HeroCarousel({ heroStats }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);
  const touchStartX = useRef<number | null>(null);

  const goTo = (index: number) => {
    setContentVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setContentVisible(true);
    }, 280);
  };

  const goNext = () => goTo((current + 1) % slides.length);
  const goPrev = () => goTo((current - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, paused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    touchStartX.current = null;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
  };

  return (
    <section
      style={{ position: 'relative', minHeight: 640, overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <style>{`
        .hero-main-pad { padding-top: 120px; padding-bottom: 160px; }
        @media (max-width: 768px) { .hero-main-pad { padding-top: 72px; padding-bottom: 120px; } }
        @media (max-width: 480px) { .hero-main-pad { padding-top: 56px; padding-bottom: 96px; } }
        .hero-lead-text { font-size: 20px; }
        @media (max-width: 480px) { .hero-lead-text { font-size: 16px; } }
        @keyframes ken-burns {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ken-burns-bg { animation: none !important; }
        }
      `}</style>

      {/* Background layers */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.7s ease',
            overflow: 'hidden',
          }}
        >
          <div
            key={i === current ? `kb-${i}-active` : `kb-${i}`}
            className="ken-burns-bg"
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: i === current ? 'ken-burns 8s ease-out forwards' : 'none',
            }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(15,31,77,0.88) 0%, rgba(15,31,77,0.7) 50%, rgba(15,31,77,0.35) 100%)',
        }}
      />

      {/* Content */}
      <div className="dillo-container hero-main-pad" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: 680,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            color: '#fff',
            opacity: contentVisible ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignSelf: 'flex-start',
              background: 'var(--dillo-red-500)',
              color: '#fff',
              padding: '4px 12px',
              borderRadius: 2,
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: 'var(--ls-eyebrow)',
              textTransform: 'uppercase',
            }}
          >
            {slides[current].eyebrow}
          </span>

          <h1
            className="hero-h1"
            style={{
              fontFamily: 'var(--font-display)',
              margin: 0,
              color: '#fff',
              whiteSpace: 'pre-line',
            }}
          >
            {slides[current].headline}
          </h1>

          <hr
            style={{
              width: 96,
              height: 6,
              background: 'var(--dillo-red-500)',
              border: 0,
              margin: 0,
            }}
          />

          <p
            className="hero-lead-text"
            style={{
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.88)',
              maxWidth: 560,
              margin: 0,
            }}
          >
            {slides[current].subtext}
          </p>

          <div className="btn-group" style={{ marginTop: 8 }}>
            <Link href={slides[current].primaryCta.href}>
              <Button
                variant="primary"
                size="lg"
                iconRight={<span aria-hidden>→</span>}
              >
                {slides[current].primaryCta.label}
              </Button>
            </Link>
            {slides[current].secondaryCta && (
              <Link href={slides[current].secondaryCta!.href}>
                <Button
                  variant="ghost"
                  size="lg"
                  style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}
                >
                  {slides[current].secondaryCta!.label}
                </Button>
              </Link>
            )}
          </div>

          {/* Dot navigation */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 8 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background:
                    i === current ? '#fff' : 'rgba(255,255,255,0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'width 0.3s ease, background 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          background: 'rgba(10,22,56,0.85)',
          borderTop: '4px solid var(--dillo-red-500)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="dillo-container hero-stats-strip">
          {heroStats.map((s) => (
            <div key={s.id} style={{ display: 'flex', flexDirection: 'column', gap: 4, color: '#fff' }}>
              <AnimatedStat
                value={s.value}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 32,
                  lineHeight: 1,
                  color: '#fff',
                }}
              />
              <div
                style={{
                  fontSize: 12,
                  letterSpacing: 'var(--ls-eyebrow)',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.7)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                }}
              >
                {s.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
