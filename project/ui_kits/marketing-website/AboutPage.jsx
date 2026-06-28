/* AboutPage — Company story, experience, industries, manufacturing, CTA. */

const NS_About = window.DilloUniformsDesignSystem_8624ed;
const { Section: AboutSection, SectionHeader: AboutHeader, StatCard: AboutStat, Button: AboutBtn, ProcessStep: AboutStep, Card: AboutCard } = NS_About;
const P_A = window.DILLO_PHOTOS;

function AboutHero() {
  return (
    <section style={{ background: "var(--dillo-navy-500)", color: "#fff", padding: "120px 0 96px", position: "relative", overflow: "hidden" }}>
      <div className="dillo-container" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <span className="dillo-eyebrow" style={{ color: "var(--dillo-red-400)" }}>About Dillo</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.02em", color: "#fff", margin: 0 }}>
            A family of stitchers, on the Mumbai floor since 2005.
          </h1>
          <hr style={{ width: 96, height: 6, background: "var(--dillo-red-500)", border: 0, margin: "8px 0" }} />
          <p style={{ fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.85)", maxWidth: 560, fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
            "We've never sold a uniform we wouldn't put on our own team."
          </p>
        </div>
        <div style={{
          height: 380,
          borderRadius: "var(--radius-lg)",
          overflow: "hidden",
          boxShadow: "var(--shadow-xl)",
          border: "1px solid rgba(255,255,255,0.1)",
          background: `center/cover url(${P_A.team})`,
        }} />
      </div>
    </section>
  );
}

function Story() {
  return (
    <AboutSection tone="white" pad="lg">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
        <AboutHeader eyebrow="Our story" title="Twenty years of stitching." />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, color: "var(--text-primary)", fontSize: 17, lineHeight: 1.7 }}>
          <p>Dillo started in 2005 as a 12-machine workshop in Andheri East, stitching scrubs for a single local hospital. Twenty years on, we run a 240-machine floor and ship to 450 clients across India — but the founding family is still on the floor every morning.</p>
          <p>We don't outsource. Every uniform that ships under the Dillo banner is cut, stitched and finished in our own factory, by people we know by name. That's why we can promise a fabric grade across six hospitals or a stitch tolerance across four thousand school shirts — we can see it happening.</p>
        </div>
      </div>
    </AboutSection>
  );
}

function Experience() {
  return (
    <AboutSection tone="alt" pad="lg">
      <AboutHeader eyebrow="Our experience" title="By the numbers." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48, marginTop: 56 }}>
        <AboutStat value="20+"   label="Years stitching" />
        <AboutStat value="2.4M+" label="Uniforms delivered" />
        <AboutStat value="240"   label="Stitching machines" />
        <AboutStat value="14"    label="Indian states served" />
      </div>
    </AboutSection>
  );
}

function Industries() {
  const list = [
    { t: "Healthcare",   d: "Hospitals, clinics, diagnostic chains. 6 of India's top-50 hospital groups." },
    { t: "Hospitality",  d: "Hotels, restaurants, cafés. From 50-room boutiques to 800-room chains." },
    { t: "Educational",  d: "Schools, colleges and training institutes. K-12 specialty." },
    { t: "Industrial",   d: "Manufacturing, logistics, construction. FR & hi-vis certified lines." },
    { t: "Corporate",    d: "Agencies, startups, event teams. Quick-turn branded tees and polos." },
  ];
  return (
    <AboutSection tone="white" pad="lg">
      <AboutHeader eyebrow="Industries we serve" title="Five verticals, decades of fluency." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 56 }}>
        {list.map((i) => (
          <AboutCard key={i.t} pad="md" interactive>
            <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>{i.t}</h3>
            <p style={{ margin: 0, fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.55 }}>{i.d}</p>
          </AboutCard>
        ))}
      </div>
    </AboutSection>
  );
}

function Manufacturing() {
  const steps = [
    { n: "01", t: "Source",   d: "Fabric direct from Coimbatore mills, lab-tested for shrinkage, colour-fastness and GSM." },
    { n: "02", t: "Cut",      d: "Computerised pattern cutting on 6-layer tables. <1mm tolerance across the run." },
    { n: "03", t: "Stitch",   d: "240 industrial machines across single-needle, overlock and bartack lines." },
    { n: "04", t: "Finish",   d: "Press, fold, tag and pack with batch-level QC. Each carton ships with a QR check sheet." },
    { n: "05", t: "Deliver",  d: "Door-to-door delivery across India through vetted logistics partners." },
  ];
  return (
    <AboutSection tone="alt" pad="lg">
      <AboutHeader eyebrow="Manufacturing process" title="What happens on our floor." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 32, marginTop: 56 }}>
        {steps.map((s) => (
          <AboutStep key={s.n} number={s.n} title={s.t} description={s.d} />
        ))}
      </div>
      <div style={{
        marginTop: 64,
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16,
        borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-md)",
      }}>
        <div style={{ height: 240, background: `center/cover url(${P_A.fabric})` }} />
        <div style={{ height: 240, background: `center/cover url(${P_A.stitching})` }} />
        <div style={{ height: 240, background: `center/cover url(${P_A.warehouse})` }} />
      </div>
    </AboutSection>
  );
}

function AboutCTA({ onContact }) {
  return (
    <AboutSection tone="red" pad="md">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <h2 style={{ color: "#fff", margin: 0, fontFamily: "var(--font-display)", fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Tour our floor — virtually or in person.
        </h2>
        <AboutBtn variant="navy" size="lg" onClick={onContact}>Get in touch</AboutBtn>
      </div>
    </AboutSection>
  );
}

function AboutPage({ onNavigate }) {
  return (
    <>
      <AboutHero />
      <Story />
      <Experience />
      <Industries />
      <Manufacturing />
      <AboutCTA onContact={() => onNavigate("contact")} />
    </>
  );
}

window.AboutPage = AboutPage;
