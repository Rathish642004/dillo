import React from "react";

const variants = {
  red:    { bg: "var(--dillo-red-500)",   fg: "var(--neutral-0)" },
  navy:   { bg: "var(--dillo-navy-500)",  fg: "var(--neutral-0)" },
  neutral:{ bg: "var(--neutral-150)",     fg: "var(--text-primary)" },
  success:{ bg: "var(--success-50)",      fg: "var(--success-500)" },
  warning:{ bg: "var(--warning-50)",      fg: "var(--warning-500)" },
};

export function Badge({ children, variant = "neutral", banner }) {
  const v = variants[variant];
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      padding: banner ? "4px 10px" : "3px 10px",
      background: v.bg,
      color: v.fg,
      borderRadius: banner ? "var(--radius-sm)" : "var(--radius-pill)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: banner ? 11 : 12,
      letterSpacing: banner ? "var(--ls-eyebrow)" : 0.2,
      textTransform: banner ? "uppercase" : "none",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
    }}>{children}</span>
  );
}
