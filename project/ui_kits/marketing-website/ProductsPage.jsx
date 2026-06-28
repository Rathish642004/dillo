/* ProductsPage — category landing.
   Sub-nav of categories, hero per category, item grid, CTA. */

const NS_Prod = window.DilloUniformsDesignSystem_8624ed;
const { Section: PSection, SectionHeader: PHeader, Button: PBtn, Card: PCard, Badge: PBadge } = NS_Prod;
const PP = window.DILLO_PHOTOS;

const CATEGORIES = {
  healthcare:  { t: "Healthcare uniforms",  blurb: "Scrubs, lab coats, ward shirts and OT gowns. Anti-microbial finish, built for a hundred wash cycles.",  img: PP.healthcare,  items: ["V-neck scrubs", "Lab coats", "Ward shirts", "OT gowns", "Patient gowns", "Caps & masks"] },
  hospitality: { t: "Hospitality uniforms", blurb: "Front-of-house, F&B, housekeeping and chef whites. Tailored to your brand palette.",                     img: PP.hospitality, items: ["Reception suits", "F&B vests", "Housekeeping sets", "Chef coats", "Apron sets", "Bell-boy uniforms"] },
  educational: { t: "Educational uniforms", blurb: "Shirts, trousers, skirts, blazers and sportswear. K-12 specialty with consistent fabric across grades.", img: PP.educational, items: ["Shirts", "Trousers/skirts", "Blazers", "Ties & belts", "Sportswear", "House T-shirts"] },
  industrial:  { t: "Industrial uniforms",  blurb: "Coveralls, hi-vis, work shirts and PPE. FR-certified lines for hazardous environments.",                 img: PP.industrial,  items: ["Coveralls", "Hi-vis vests", "Work shirts", "Cargo trousers", "FR jackets", "Safety caps"] },
  corporate:   { t: "Corporate T-shirts",   blurb: "Customised tees, polos and hoodies for events, agencies and internal branding. As few as 50 pieces.",   img: PP.corporate,   items: ["Crew tees", "Polos", "Hoodies", "Quarter-zips", "Caps", "Tote sets"] },
};

function CategoryNav({ active, onSelect }) {
  return (
    <div style={{ position: "sticky", top: 72, zIndex: 40, background: "var(--neutral-0)", borderBottom: "1px solid var(--border-default)" }}>
      <div className="dillo-container" style={{ display: "flex", gap: 4, overflowX: "auto", padding: "12px 24px" }}>
        {Object.entries(CATEGORIES).map(([k, c]) => (
          <button key={k} onClick={() => onSelect(k)}
            style={{
              padding: "10px 18px",
              fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14,
              background: active === k ? "var(--dillo-red-500)" : "transparent",
              color: active === k ? "#fff" : "var(--text-primary)",
              border: active === k ? "1px solid var(--dillo-red-500)" : "1px solid var(--border-default)",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background var(--dur-base) var(--ease-out)",
            }}>{c.t}</button>
        ))}
      </div>
    </div>
  );
}

function CategoryHero({ cat, onQuote }) {
  return (
    <section style={{ background: "var(--bg-page-alt)", padding: "64px 0", borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="dillo-container" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span className="dillo-eyebrow">Products</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0 }}>{cat.t}</h1>
          <hr style={{ width: 64, height: 4, background: "var(--dillo-red-500)", border: 0, margin: 0 }} />
          <p style={{ fontSize: 18, lineHeight: 1.55, color: "var(--text-secondary)", maxWidth: 560 }}>{cat.blurb}</p>
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <PBtn variant="primary" size="lg" onClick={onQuote}>Request a sample</PBtn>
            <PBtn variant="secondary" size="lg" onClick={onQuote}>Talk to us</PBtn>
          </div>
        </div>
        <div style={{
          height: 360, borderRadius: "var(--radius-lg)", overflow: "hidden",
          background: `center/cover url(${cat.img})`, boxShadow: "var(--shadow-lg)",
        }} />
      </div>
    </section>
  );
}

function ItemGrid({ cat }) {
  return (
    <PSection tone="white" pad="lg">
      <PHeader eyebrow="Catalogue" title="Pieces we make in this category." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 56 }}>
        {cat.items.map((it, idx) => (
          <PCard key={it} pad="none" interactive>
            <div style={{
              height: 220, background: `center/cover url(${cat.img})`,
              position: "relative",
            }}>
              {idx < 2 ? (
                <span style={{
                  position: "absolute", top: 12, left: 12,
                  background: "var(--dillo-red-500)", color: "#fff",
                  padding: "4px 10px", borderRadius: 2,
                  fontFamily: "var(--font-heading)", fontWeight: 700,
                  fontSize: 11, letterSpacing: "var(--ls-eyebrow)", textTransform: "uppercase",
                }}>{idx === 0 ? "Bestseller" : "New"}</span>
              ) : null}
            </div>
            <div style={{ padding: 20 }}>
              <h3 style={{ fontSize: 18, margin: 0 }}>{it}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--text-secondary)" }}>From ₹{(280 + idx*45)} / piece · MOQ 50</p>
            </div>
          </PCard>
        ))}
      </div>
    </PSection>
  );
}

function SpecsBand() {
  const specs = [
    ["Fabric",    "Cotton, poly-cotton, poly-viscose blends 150–220 GSM"],
    ["MOQ",       "50 pieces (T-shirts) · 100 pieces (uniforms)"],
    ["Sampling",  "5–7 days lead time on stitched samples"],
    ["Bulk lead", "3–6 weeks depending on customisation"],
    ["Custom",    "Embroidery, screen print, sublimation, woven labels"],
    ["Care",      "100-wash colour-fastness and shrink tested"],
  ];
  return (
    <PSection tone="alt" pad="md">
      <PHeader eyebrow="What you can spec" title="Built around your brief." />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 40 }}>
        {specs.map(([k, v]) => (
          <div key={k} style={{
            padding: 20,
            background: "var(--surface-card)",
            border: "1px solid var(--border-default)",
            borderRadius: "var(--radius-lg)",
            borderLeft: "4px solid var(--dillo-red-500)",
          }}>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "var(--ls-eyebrow)", color: "var(--text-muted)" }}>{k}</div>
            <div style={{ marginTop: 6, fontSize: 16, color: "var(--text-primary)" }}>{v}</div>
          </div>
        ))}
      </div>
    </PSection>
  );
}

function ProductsCTA({ onContact }) {
  return (
    <PSection tone="navy" pad="md" bottomRule>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, color: "#fff", flexWrap: "wrap" }}>
        <div>
          <h2 style={{ color: "#fff", margin: 0, fontFamily: "var(--font-display)", fontSize: 36, letterSpacing: "-0.02em" }}>Like what you see?</h2>
          <p style={{ margin: "8px 0 0", color: "rgba(255,255,255,0.78)" }}>Request a stitched sample. We'll ship in 5–7 days.</p>
        </div>
        <PBtn variant="primary" size="lg" onClick={onContact}>Request a sample</PBtn>
      </div>
    </PSection>
  );
}

function ProductsPage({ onNavigate, initial = "healthcare" }) {
  const [active, setActive] = React.useState(initial);
  const cat = CATEGORIES[active];
  return (
    <>
      <CategoryNav active={active} onSelect={setActive} />
      <CategoryHero cat={cat} onQuote={() => onNavigate("contact")} />
      <ItemGrid cat={cat} />
      <SpecsBand />
      <ProductsCTA onContact={() => onNavigate("contact")} />
    </>
  );
}

window.ProductsPage = ProductsPage;
