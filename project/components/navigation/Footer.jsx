import React from "react";

const colLabel = {
  fontFamily: "var(--font-heading)", fontWeight: 700,
  fontSize: 13, letterSpacing: "var(--ls-eyebrow)",
  textTransform: "uppercase",
  color: "var(--dillo-red-400)",
};

const link = {
  fontSize: 14, color: "rgba(255,255,255,0.78)",
  textDecoration: "none", padding: "4px 0",
  display: "block",
};

export function Footer({ onNavigate }) {
  return (
    <footer style={{
      background: "var(--dillo-navy-500)",
      color: "var(--neutral-0)",
      paddingTop: 80, paddingBottom: 24,
      borderTop: "4px solid var(--dillo-red-500)",
      position: "relative",
    }}>
      <div className="dillo-container" style={{
        display: "grid",
        gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
        gap: 48,
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{
            display: "inline-flex", alignSelf: "flex-start",
            background: "var(--dillo-red-500)", color: "var(--neutral-0)",
            padding: "6px 14px", borderRadius: 2,
            fontFamily: "var(--font-display)", fontSize: 24,
          }}>DILLO</span>
          <p style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            color: "rgba(255,255,255,0.85)", fontSize: 16,
            margin: 0,
          }}>The Perfect Uniform Makers</p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.6, maxWidth: 320, marginTop: 8 }}>
            Stitching uniforms for hospitals, hotels, schools and factories across India since 2005.
          </p>
        </div>

        <div>
          <div style={colLabel}>Products</div>
          <div style={{ marginTop: 12 }}>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("products"); }} href="#">Healthcare</a>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("products"); }} href="#">Hospitality</a>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("products"); }} href="#">School</a>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("products"); }} href="#">Industrial</a>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("products"); }} href="#">Corporate T-Shirts</a>
          </div>
        </div>

        <div>
          <div style={colLabel}>Company</div>
          <div style={{ marginTop: 12 }}>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("about"); }} href="#">About</a>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("portfolio"); }} href="#">Portfolio</a>
            <a style={link} onClick={(e) => { e.preventDefault(); onNavigate?.("contact"); }} href="#">Contact</a>
            <a style={link} href="#">Careers</a>
          </div>
        </div>

        <div>
          <div style={colLabel}>Reach us</div>
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8, fontSize: 14, color: "rgba(255,255,255,0.78)" }}>
            <div>📍 Plot 27, MIDC Phase II,<br/>Andheri East, Mumbai 400093</div>
            <div>📞 +91 98202 12345</div>
            <div>📧 hello@dillouniforms.com</div>
            <div>🕒 Mon–Sat · 9:30–18:30</div>
          </div>
        </div>
      </div>

      <div className="dillo-container" style={{
        marginTop: 56, paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.12)",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: "rgba(255,255,255,0.55)",
      }}>
        <div>© {new Date().getFullYear()} Dillo Uniforms Pvt. Ltd. All rights reserved.</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a href="#" style={{ color: "rgba(255,255,255,0.55)" }}>Privacy</a>
          <a href="#" style={{ color: "rgba(255,255,255,0.55)" }}>Terms</a>
        </div>
      </div>
    </footer>
  );
}
