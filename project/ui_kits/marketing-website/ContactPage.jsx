/* ContactPage — quote form + contact details + WhatsApp + map. */

const NS_C = window.DilloUniformsDesignSystem_8624ed;
const { Section: CSection, SectionHeader: CHeader, Input: CInput, Textarea: CTextarea, Select: CSelect, Button: CBtn, Card: CCard } = NS_C;

function ContactHero() {
  return (
    <section style={{ background: "var(--dillo-navy-500)", color: "#fff", padding: "96px 0 64px" }}>
      <div className="dillo-container" style={{ maxWidth: 880 }}>
        <span className="dillo-eyebrow" style={{ color: "var(--dillo-red-400)" }}>Contact</span>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 64, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "12px 0 16px", color: "#fff" }}>
          Tell us what you need.
        </h1>
        <hr style={{ width: 96, height: 6, background: "var(--dillo-red-500)", border: 0, margin: 0 }} />
        <p style={{ marginTop: 20, fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.85)" }}>
          A quote within 24 hours. A stitched sample within a week. Same family-run quality bar across every category.
        </p>
      </div>
    </section>
  );
}

function ContactBody({ onSubmit }) {
  const [form, setForm] = React.useState({
    name: "", company: "", phone: "", email: "",
    requirement: "healthcare", quantity: "", message: "",
  });
  const [sent, setSent] = React.useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    onSubmit?.(form);
  };

  return (
    <CSection tone="white" pad="lg" style={{ paddingTop: 80 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 64 }}>
        {/* Form */}
        <form onSubmit={submit} style={{
          background: "var(--surface-card)",
          border: "1px solid var(--border-default)",
          borderRadius: "var(--radius-lg)",
          padding: 40,
          boxShadow: "var(--shadow-md)",
          display: "flex", flexDirection: "column", gap: 20,
          position: "relative",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center",
              width: 44, height: 44, borderRadius: "var(--radius-md)",
              background: "var(--dillo-red-500)", color: "#fff",
              fontFamily: "var(--font-display)", fontSize: 18,
            }}>D</span>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 22, color: "var(--text-primary)" }}>Request a quote</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>We respond within one business day.</div>
            </div>
          </div>
          <hr className="dillo-rule" />
          {sent ? (
            <div style={{
              padding: "20px 16px",
              background: "var(--success-50)",
              border: "1px solid var(--success-500)",
              borderRadius: "var(--radius-md)",
              color: "var(--success-500)",
              fontFamily: "var(--font-heading)", fontWeight: 700,
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <span aria-hidden style={{ fontSize: 18 }}>✓</span>
              Thanks {form.name || "—"}. We've received your request and will reply by phone or email shortly.
            </div>
          ) : null}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <CInput label="Name" placeholder="Anita Krishnan" value={form.name} onChange={update("name")} required />
            <CInput label="Company name" placeholder="MedStar Hospitals" value={form.company} onChange={update("company")} />
            <CInput label="Phone" placeholder="+91 …" value={form.phone} onChange={update("phone")} required />
            <CInput label="Email" type="email" placeholder="you@company.com" value={form.email} onChange={update("email")} required />
            <CSelect label="Requirement" value={form.requirement} onChange={update("requirement")} options={[
              { value: "healthcare",  label: "Healthcare uniforms" },
              { value: "hospitality", label: "Hospitality uniforms" },
              { value: "educational", label: "Educational uniforms" },
              { value: "industrial",  label: "Industrial uniforms" },
              { value: "corporate",   label: "Corporate T-shirts" },
            ]} />
            <CInput label="Quantity" placeholder="e.g. 500 pieces" value={form.quantity} onChange={update("quantity")} hint="Minimum order: 50 pieces" />
          </div>
          <CTextarea label="Message" rows={4}
            placeholder="Tell us about customisation, deadlines, or anything else."
            value={form.message} onChange={update("message")} />
          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <CBtn type="submit" variant="primary" size="lg" iconRight={<span aria-hidden>→</span>}>Send request</CBtn>
            <a href="https://wa.me/919820212345?text=Hi%20Dillo%2C%20I%27d%20like%20a%20uniform%20quote." target="_blank" rel="noopener noreferrer"
               style={{
                 display: "inline-flex", alignItems: "center", gap: 8,
                 padding: "0 22px", height: 56,
                 background: "#25D366", color: "#fff",
                 borderRadius: "var(--radius-md)",
                 fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15,
                 textDecoration: "none",
               }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z"/></svg>
              WhatsApp instead
            </a>
          </div>
        </form>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { icon: "📍", t: "Address",       v: <>Plot 27, MIDC Phase II,<br/>Andheri East, Mumbai 400093</> },
            { icon: "📞", t: "Phone",         v: "+91 98202 12345" },
            { icon: "📧", t: "Email",         v: "hello@dillouniforms.com" },
            { icon: "🕒", t: "Working hours", v: <>Mon – Sat<br/>09:30 – 18:30 IST</> },
            { icon: "📱", t: "WhatsApp",      v: "+91 98202 12345 — fastest" },
          ].map((row) => (
            <div key={row.t} style={{
              display: "grid", gridTemplateColumns: "44px 1fr", gap: 14,
              padding: "18px 20px",
              background: "var(--surface-card)",
              border: "1px solid var(--border-default)",
              borderRadius: "var(--radius-lg)",
              alignItems: "center",
            }}>
              <span aria-hidden style={{
                fontSize: 20, width: 44, height: 44,
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                background: "var(--dillo-red-50)", borderRadius: "var(--radius-md)",
              }}>{row.icon}</span>
              <div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "var(--ls-eyebrow)", color: "var(--text-muted)" }}>{row.t}</div>
                <div style={{ marginTop: 2, fontSize: 15, color: "var(--text-primary)", lineHeight: 1.4 }}>{row.v}</div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </CSection>
  );
}

function MapBand() {
  return (
    <section style={{ height: 380, background: "var(--bg-page-alt)", position: "relative", overflow: "hidden", borderTop: "1px solid var(--border-default)" }}>
      <iframe
        title="Dillo Uniforms — Andheri East, Mumbai"
        src="https://www.openstreetmap.org/export/embed.html?bbox=72.84%2C19.11%2C72.90%2C19.13&layer=mapnik&marker=19.12%2C72.87"
        style={{ width: "100%", height: "100%", border: 0, filter: "saturate(0.85)" }}
        loading="lazy"
      />
      <div style={{
        position: "absolute", left: 32, top: 32,
        padding: 20,
        background: "var(--neutral-0)",
        border: "1px solid var(--border-default)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-lg)",
        maxWidth: 280,
      }}>
        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 16, color: "var(--text-primary)" }}>Dillo Uniforms HQ</div>
        <div style={{ marginTop: 6, fontSize: 14, color: "var(--text-secondary)" }}>Plot 27, MIDC Phase II,<br/>Andheri East, Mumbai 400093</div>
        <hr className="dillo-rule" style={{ margin: "12px 0" }} />
        <a href="#" style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 13, color: "var(--dillo-red-500)" }}>Get directions →</a>
      </div>
    </section>
  );
}

function ContactPage({ onSubmit }) {
  return (
    <>
      <ContactHero />
      <ContactBody onSubmit={onSubmit} />
      <MapBand />
    </>
  );
}

window.ContactPage = ContactPage;
