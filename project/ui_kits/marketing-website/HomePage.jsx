/* HomePage — the long marketing page.
   Sections: Hero · Trusted By · Why Dillo · Numbers · Products · How It Works · Testimonials · CTA */

const NS = window.DilloUniformsDesignSystem_8624ed;
const { Button, IconButton, Section, SectionHeader, ProductCard, StatCard, TestimonialCard, ProcessStep, Card, Badge } = NS;
const P = window.DILLO_PHOTOS;

function Hero({ onQuote, onProducts }) {
  return (
    <section style={{ position: "relative", minHeight: 640, overflow: "hidden" }}>
      <div style={{
        position: "absolute", inset: 0,
        background: `center/cover no-repeat url(${P.heroFactory})`,
      }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(15,31,77,0.85) 0%, rgba(15,31,77,0.7) 50%, rgba(15,31,77,0.45) 100%)" }} />
      <div className="dillo-container" style={{ position: "relative", paddingTop: 120, paddingBottom: 120 }}>
        <div style={{ maxWidth: 720, display: "flex", flexDirection: "column", gap: 24, color: "#fff" }}>
          <span style={{
            display: "inline-flex", alignSelf: "flex-start",
            background: "var(--dillo-red-500)", color: "#fff",
            padding: "4px 12px", borderRadius: 2,
            fontFamily: "var(--font-heading)", fontWeight: 700,
            fontSize: 12, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase",
          }}>Trusted since 2005</span>
          <h1 style={{
            fontFamily: "var(--font-display)",
            fontSize: 76, lineHeight: 1.0, letterSpacing: "-0.02em",
            margin: 0, color: "#fff",
          }}>The perfect uniform.<br/>Stitched on time.</h1>
          <hr style={{ width: 96, height: 6, background: "var(--dillo-red-500)", border: 0, margin: 0 }} />
          <p style={{ fontSize: 20, lineHeight: 1.5, color: "rgba(255,255,255,0.88)", maxWidth: 580 }}>
            Twenty years stitching uniforms for India's hospitals, hotels, classrooms and factory floors.
            From 50 pieces to 50,000 — same quality control either way.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <Button variant="primary" size="lg" onClick={onQuote} iconRight={<span aria-hidden>→</span>}>Get a quote</Button>
            <Button variant="ghost" size="lg" onClick={onProducts}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}>View our work</Button>
          </div>
        </div>
      </div>
      {/* Quick stats strip across the bottom */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0,
        background: "rgba(10,22,56,0.85)",
        borderTop: "4px solid var(--dillo-red-500)",
        backdropFilter: "blur(8px)",
      }}>
        <div className="dillo-container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, padding: "24px 0" }}>
          {[
            ["2.4M+", "Uniforms delivered"],
            ["20", "Years stitching"],
            ["450+", "Active clients"],
            ["5", "Industries served"],
          ].map(([v, l]) => (
            <div key={l} style={{ display: "flex", flexDirection: "column", gap: 4, color: "#fff" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 32, lineHeight: 1 }}>{v}</div>
              <div style={{ fontSize: 12, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["MedStar Hospitals", "Taj Hotels", "Ryan International", "Larsen & Turbo", "Welspun", "Apollo Clinics", "Hyatt Place", "DPS Group"];
  return (
    <section style={{ background: "var(--neutral-0)", padding: "48px 0", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="dillo-container">
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <span className="dillo-eyebrow">Trusted by</span>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 0,
          borderTop: "1px solid var(--border-subtle)",
          borderLeft: "1px solid var(--border-subtle)",
        }}>
          {logos.map((l) => (
            <div key={l} style={{
              padding: "28px 16px",
              borderRight: "1px solid var(--border-subtle)",
              borderBottom: "1px solid var(--border-subtle)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16,
              color: "var(--neutral-400)",
              letterSpacing: 0.5,
            }}>{l}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyDillo() {
  const items = [
    { t: "20 years on the floor",   d: "Stitching uniforms since 2005, with the same family-run quality bar." },
    { t: "5 verticals, one bar",    d: "Hospital, hotel, school, factory and office — we ship to all of them." },
    { t: "Fabric we'd wear",        d: "We source our cotton and poly-blends directly from mills in Coimbatore." },
    { t: "Delivered on the date",   d: "98% on-time delivery across the last 2,400 orders. Tracked, not promised." },
  ];
  return (
    <Section tone="white" pad="lg">
      <SectionHeader eyebrow="Why Dillo" title="Built to last. Delivered on time." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginTop: 56 }}>
        {items.map((i, idx) => (
          <div key={i.t} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{
              display: "inline-flex", alignSelf: "flex-start",
              width: 56, height: 56, borderRadius: 4,
              background: "var(--dillo-red-50)", color: "var(--dillo-red-500)",
              fontFamily: "var(--font-display)", fontSize: 22,
              alignItems: "center", justifyContent: "center",
            }}>{String(idx + 1).padStart(2, "0")}</span>
            <h3 style={{ fontSize: 20, margin: 0 }}>{i.t}</h3>
            <p style={{ margin: 0, color: "var(--text-secondary)", lineHeight: 1.55 }}>{i.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Numbers() {
  return (
    <Section tone="navy" pad="lg" bottomRule>
      <SectionHeader onDark eyebrow="Numbers that build trust" title="Two decades of stitched promise." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, marginTop: 56 }}>
        <StatCard value="2.4M+" label="Uniforms delivered"  onDark />
        <StatCard value="20"    label="Years in business"  onDark />
        <StatCard value="450+"  label="Active clients"      onDark />
        <StatCard value="98%"   label="On-time delivery"    onDark />
      </div>
    </Section>
  );
}

function Products({ onCategory }) {
  const cats = [
    { k: "healthcare",  t: "Healthcare uniforms",  d: "Scrubs, lab coats, ward shirts. Built for a hundred wash cycles.", img: P.healthcare,  items: ["Scrubs","Lab coats","Ward"] },
    { k: "hospitality", t: "Hospitality uniforms", d: "Front-of-house, F&B, housekeeping and chef whites.",               img: P.hospitality, items: ["F&B","Housekeeping","Chef whites"] },
    { k: "educational", t: "Educational uniforms", d: "Shirts, trousers, skirts, blazers and sportswear.",                 img: P.educational, items: ["Shirts","Blazers","Sports"] },
    { k: "industrial",  t: "Industrial uniforms",  d: "Coveralls, hi-vis, factory floor and PPE.",                         img: P.industrial,  items: ["Coveralls","Hi-vis","PPE"] },
    { k: "corporate",   t: "Corporate T-Shirts",   d: "Customised tees for events, agencies and internal branding.",       img: P.corporate,   items: ["Crew","Polo","Hoodies"] },
  ];
  return (
    <Section tone="alt" pad="lg">
      <SectionHeader eyebrow="Our products" title="Five verticals, one quality bar." description="Pick a category — every one ships from the same Mumbai floor under the same QC team." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }}>
        {cats.slice(0, 3).map((c) => (
          <ProductCard key={c.k} title={c.t} description={c.d} imageSrc={c.img} items={c.items} onCta={() => onCategory(c.k)} />
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 24 }}>
        {cats.slice(3).map((c) => (
          <ProductCard key={c.k} title={c.t} description={c.d} imageSrc={c.img} items={c.items} onCta={() => onCategory(c.k)} />
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section tone="white" pad="lg">
      <SectionHeader eyebrow="How it works" title="From brief to delivery in four steps." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, marginTop: 56 }}>
        <ProcessStep number="01" title="Brief us"          description="Tell us the industry, quantity, customisation and target date." />
        <ProcessStep number="02" title="Sample &amp; fit"  description="We send a stitched sample in 5–7 days for your approval." />
        <ProcessStep number="03" title="Stitch &amp; QC"   description="Bulk production on our Mumbai floor with batch QC at every stage." />
        <ProcessStep number="04" title="Deliver"           description="Door-to-door delivery across India, tracked end-to-end." />
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section tone="alt" pad="lg">
      <SectionHeader eyebrow="Client testimonials" title="Twenty years, four hundred clients." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 56 }}>
        <TestimonialCard
          quote="Six hospitals, same fabric grade across all of them. Dillo just gets it."
          author="Dr. Anita Krishnan" role="Procurement Head, MedStar Hospitals"
          avatarSrc={P.portrait1} />
        <TestimonialCard
          quote="We've reordered 14 times. That's the simplest review I can give."
          author="Vikram Mehta" role="GM, Hyatt Place Mumbai"
          avatarSrc={P.portrait2} />
        <TestimonialCard
          quote="Our 4,200 students kitted out without a single missed deadline."
          author="Sister Mary Lobo" role="Principal, St. Xavier's School"
          avatarSrc={P.portrait3} />
      </div>
    </Section>
  );
}

function CTA({ onQuote, onContact }) {
  return (
    <Section tone="red" pad="md">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div style={{ color: "#fff", maxWidth: 720 }}>
          <h2 style={{
            color: "#fff", margin: 0,
            fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em",
          }}>Ready to kit your team out?</h2>
          <p style={{ marginTop: 12, fontSize: 18, color: "rgba(255,255,255,0.92)" }}>
            Tell us what you need — we'll quote within 24 hours.
          </p>
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          <Button variant="navy" size="lg" onClick={onQuote}>Get a quote</Button>
          <Button variant="ghost" size="lg" onClick={onContact}
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.45)" }}>Contact us</Button>
        </div>
      </div>
    </Section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero onQuote={() => onNavigate("contact")} onProducts={() => onNavigate("portfolio")} />
      <TrustedBy />
      <WhyDillo />
      <Numbers />
      <Products onCategory={() => onNavigate("products")} />
      <HowItWorks />
      <Testimonials />
      <CTA onQuote={() => onNavigate("contact")} onContact={() => onNavigate("contact")} />
    </>
  );
}

window.HomePage = HomePage;
