/* PortfolioPage — case study grid. */

const NS_Port = window.DilloUniformsDesignSystem_8624ed;
const { Section: PortSection, SectionHeader: PortHeader, Card: PortCard, Button: PortBtn } = NS_Port;
const PPP = window.DILLO_PHOTOS;

const PROJECTS = [
  { name: "MedStar Hospitals",      loc: "Mumbai, Pune, Nashik",  qty: "12,400 pieces", img: PPP.healthcare,  vert: "Healthcare",   year: "2024" },
  { name: "Hyatt Place",            loc: "Mumbai",                qty: "1,850 pieces",  img: PPP.hospitality, vert: "Hospitality",  year: "2024" },
  { name: "St. Xavier's School",    loc: "Mumbai",                qty: "4,200 pieces",  img: PPP.educational, vert: "Educational",  year: "2023" },
  { name: "Welspun Manufacturing",  loc: "Vapi, Gujarat",         qty: "3,600 pieces",  img: PPP.industrial,  vert: "Industrial",   year: "2024" },
  { name: "Razorpay Hackathon",     loc: "Bangalore",             qty: "850 tees",      img: PPP.corporate,   vert: "Corporate",    year: "2025" },
  { name: "Apollo Diagnostics",     loc: "Pan-India",             qty: "8,900 pieces",  img: PPP.healthcare,  vert: "Healthcare",   year: "2023" },
  { name: "Taj Bengal",             loc: "Kolkata",               qty: "2,200 pieces",  img: PPP.hospitality, vert: "Hospitality",  year: "2022" },
  { name: "Ryan International",     loc: "16 campuses",           qty: "18,400 pieces", img: PPP.educational, vert: "Educational",  year: "2024" },
];

function PortfolioHero() {
  return (
    <section style={{ background: "var(--bg-page-alt)", padding: "96px 0 64px", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="dillo-container" style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 760 }}>
        <span className="dillo-eyebrow">Portfolio</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>
          Work we've stitched.
        </h1>
        <hr style={{ width: 96, height: 6, background: "var(--dillo-red-500)", border: 0, margin: 0 }} />
        <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--text-secondary)" }}>
          A small sample of the four-fifty clients we ship to. Hospital groups, hotels, schools, factory floors and event teams.
        </p>
      </div>
    </section>
  );
}

function FilterBar({ active, setActive }) {
  const verts = ["All", "Healthcare", "Hospitality", "Educational", "Industrial", "Corporate"];
  return (
    <div className="dillo-container" style={{ display: "flex", gap: 8, padding: "32px 24px 0", flexWrap: "wrap" }}>
      {verts.map((v) => (
        <button key={v} onClick={() => setActive(v)}
          style={{
            padding: "8px 14px",
            fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13,
            background: active === v ? "var(--dillo-navy-500)" : "transparent",
            color: active === v ? "#fff" : "var(--text-primary)",
            border: `1px solid ${active === v ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-pill)",
            cursor: "pointer",
          }}>{v}</button>
      ))}
    </div>
  );
}

function ProjectCard({ p }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "var(--surface-card)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-xs)",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
        transition: "all var(--dur-base) var(--ease-out)",
        cursor: "pointer",
      }}>
      <div style={{ height: 240, background: `center/cover url(${p.img})`, position: "relative" }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, transparent 50%, rgba(15,31,77,0.78) 100%)",
        }} />
        <span style={{
          position: "absolute", top: 12, left: 12,
          background: "var(--dillo-red-500)", color: "#fff",
          padding: "4px 10px", borderRadius: 2,
          fontFamily: "var(--font-heading)", fontWeight: 700,
          fontSize: 11, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase",
        }}>{p.vert}</span>
        <div style={{
          position: "absolute", left: 16, right: 16, bottom: 12,
          color: "#fff",
          fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: 0.5,
          display: "flex", justifyContent: "space-between",
        }}>
          <span>{p.loc}</span>
          <span>{p.year}</span>
        </div>
      </div>
      <div style={{ padding: 20 }}>
        <h3 style={{ fontSize: 20, margin: 0 }}>{p.name}</h3>
        <div style={{ marginTop: 12, display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--dillo-red-500)", letterSpacing: "-0.02em" }}>{p.qty}</span>
        </div>
        <div style={{ marginTop: 4, fontSize: 12, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "var(--ls-eyebrow)", fontFamily: "var(--font-heading)", fontWeight: 700 }}>delivered</div>
      </div>
    </div>
  );
}

function PortfolioGrid() {
  const [active, setActive] = React.useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.vert === active);
  return (
    <PortSection tone="white" pad="lg" style={{ paddingTop: 0 }}>
      <FilterBar active={active} setActive={setActive} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }}>
        {filtered.map((p) => <ProjectCard key={p.name + p.year} p={p} />)}
      </div>
    </PortSection>
  );
}

function PortfolioCTA({ onContact }) {
  return (
    <PortSection tone="red" pad="md">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <h2 style={{ color: "#fff", margin: 0, fontFamily: "var(--font-display)", fontSize: 36, letterSpacing: "-0.02em" }}>
          Want yours on this page next?
        </h2>
        <PortBtn variant="navy" size="lg" onClick={onContact}>Start a project</PortBtn>
      </div>
    </PortSection>
  );
}

function PortfolioPage({ onNavigate }) {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioCTA onContact={() => onNavigate("contact")} />
    </>
  );
}

window.PortfolioPage = PortfolioPage;
