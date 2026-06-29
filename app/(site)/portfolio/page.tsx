import type { Metadata } from 'next';
import PortfolioClient from '@/components/site/PortfolioClient';
import { getPortfolioProjects } from '@/lib/queries';

export const metadata: Metadata = { title: 'Portfolio' };
export const revalidate = 3600;

export default async function PortfolioPage() {
  const projects = await getPortfolioProjects();

  return (
    <>
      {/* Hero */}
      <section className="page-hero-section" style={{ background: 'var(--bg-page-alt)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="dillo-container" style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 760 }}>
          <span className="dillo-eyebrow">Portfolio</span>
          <h1 className="page-h1" style={{ fontFamily: 'var(--font-display)' }}>
            Work we&rsquo;ve stitched.
          </h1>
          <hr style={{ width: 96, height: 6, background: 'var(--dillo-red-500)', border: 0, margin: 0 }} />
          <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)' }}>
            A small sample of the four-fifty clients we ship to. Hospital groups, hotels, schools, factory floors and event teams.
          </p>
        </div>
      </section>

      <PortfolioClient projects={projects} />
    </>
  );
}
