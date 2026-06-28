import React from "react";

export function TestimonialCard({ quote, author, role, avatarSrc }) {
  return (
    <figure style={{
      margin: 0,
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      padding: 32,
      display: "flex", flexDirection: "column", gap: 20,
      boxShadow: "var(--shadow-xs)",
      position: "relative",
      overflow: "hidden",
    }}>
      <span aria-hidden style={{
        position: "absolute", top: 16, right: 24,
        fontFamily: "var(--font-serif)", fontStyle: "italic",
        fontSize: 96, lineHeight: 1, color: "var(--dillo-red-100)",
        userSelect: "none",
      }}>"</span>
      <blockquote style={{
        margin: 0,
        fontFamily: "var(--font-serif)",
        fontStyle: "italic",
        fontSize: 20, lineHeight: 1.4,
        color: "var(--text-primary)",
      }}>"{quote}"</blockquote>
      <figcaption style={{ display: "flex", alignItems: "center", gap: 12, marginTop: "auto" }}>
        {avatarSrc ? (
          <img src={avatarSrc} alt="" width={44} height={44}
               style={{ borderRadius: "var(--radius-pill)", objectFit: "cover" }} />
        ) : (
          <div aria-hidden style={{
            width: 44, height: 44, borderRadius: "var(--radius-pill)",
            background: "var(--dillo-navy-100)", color: "var(--dillo-navy-500)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-heading)", fontWeight: 700,
          }}>{author.split(" ").map(w => w[0]).slice(0,2).join("")}</div>
        )}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, color: "var(--text-primary)" }}>{author}</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
