import React from "react";
import { Button } from "../forms/Button.jsx";

const links = [
  { key: "home",      label: "Home" },
  { key: "about",     label: "About" },
  { key: "products",  label: "Products" },
  { key: "portfolio", label: "Portfolio" },
  { key: "contact",   label: "Contact" },
];

export function NavBar({ active = "home", onNavigate, onCta }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "var(--neutral-0)",
      borderBottom: `1px solid ${scrolled ? "var(--border-default)" : "transparent"}`,
      boxShadow: scrolled ? "var(--shadow-xs)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    }}>
      <div className="dillo-container" style={{
        display: "flex", alignItems: "center", gap: 24,
        height: 72,
      }}>
        {/* Brand lockup */}
        <a href="#home" onClick={(e) => { e.preventDefault(); onNavigate?.("home"); }}
           style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <span style={{
            display: "inline-flex", alignItems: "center",
            background: "var(--dillo-red-500)", color: "var(--neutral-0)",
            padding: "6px 12px", borderRadius: 2,
            fontFamily: "var(--font-display)", fontSize: 22, letterSpacing: 0.02 + "em",
            lineHeight: 1,
          }}>DILLO</span>
          <span style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            color: "var(--dillo-navy-500)", fontSize: 14,
          }}>The Perfect Uniform Makers</span>
        </a>

        {/* Links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" }}>
          {links.map((l) => {
            const isActive = active === l.key;
            return (
              <a key={l.key}
                 href={`#${l.key}`}
                 onClick={(e) => { e.preventDefault(); onNavigate?.(l.key); }}
                 style={{
                   position: "relative",
                   padding: "10px 14px",
                   fontFamily: "var(--font-heading)", fontWeight: 600,
                   fontSize: 14,
                   color: isActive ? "var(--dillo-red-500)" : "var(--text-primary)",
                   textDecoration: "none",
                   borderRadius: "var(--radius-md)",
                   transition: "color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
                 }}>
                {l.label}
                {isActive ? (
                  <span style={{
                    position: "absolute", left: 14, right: 14, bottom: 4,
                    height: 3, background: "var(--dillo-red-500)",
                  }} />
                ) : null}
              </a>
            );
          })}
        </nav>

        <Button variant="primary" size="sm" onClick={onCta}>Get a quote</Button>
      </div>
    </header>
  );
}
