'use client';

import { useEffect, useRef, useState, useMemo } from 'react';

interface AnimatedStatProps {
  value: string;
  style?: React.CSSProperties;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedStat({ value, style }: AnimatedStatProps) {
  // useMemo keeps the same array reference across re-renders when value hasn't changed.
  // Without this, .match() returns a new object every render, which makes useEffect
  // think its deps changed and restarts the animation on every frame.
  const parsed = useMemo(() => {
    const m = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!m) return null;
    return { prefix: m[1], targetNum: parseInt(m[2], 10), suffix: m[3] };
  }, [value]);

  const containerRef = useRef<HTMLSpanElement>(null);
  const animatedRef = useRef(false);

  const [displayValue, setDisplayValue] = useState<string>(
    parsed ? `${parsed.prefix}0${parsed.suffix}` : value
  );

  useEffect(() => {
    if (!parsed || animatedRef.current) return;

    const el = containerRef.current;
    if (!el) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        animatedRef.current = true;

        if (reducedMotion) {
          setDisplayValue(value);
          return;
        }

        const duration = 3500;
        const startTime = performance.now();
        const { prefix, targetNum, suffix } = parsed;

        function tick(now: number) {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          const current = Math.round(easeOutCubic(t) * targetNum);
          setDisplayValue(`${prefix}${current}${suffix}`);
          if (t < 1) requestAnimationFrame(tick);
          else setDisplayValue(value);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [parsed, value]);

  return (
    <span ref={containerRef} style={style}>
      {displayValue}
    </span>
  );
}
