import React from "react";

export function ProcessStep({ number, title, description, icon }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: 56, lineHeight: 1,
          color: "var(--dillo-red-500)",
          letterSpacing: "-0.02em",
        }}>{number}</div>
        {icon ? (
          <div style={{
            width: 48, height: 48, borderRadius: "var(--radius-md)",
            background: "var(--dillo-navy-50)", color: "var(--dillo-navy-500)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>{icon}</div>
        ) : null}
      </div>
      <hr style={{ width: 48, height: 4, background: "var(--dillo-red-500)", border: 0, margin: 0 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 style={{ fontSize: 22, margin: 0, color: "var(--text-primary)" }}>{title}</h3>
        <p style={{ color: "var(--text-secondary)", margin: 0, lineHeight: 1.55 }}>{description}</p>
      </div>
    </div>
  );
}
