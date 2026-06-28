import React from "react";

export function Select({ label, hint, error, options = [], id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label ? (
        <label htmlFor={fieldId} style={{
          fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13,
          color: "var(--text-primary)"
        }}>{label}</label>
      ) : null}
      <div style={{ position: "relative" }}>
        <select
          {...rest}
          id={fieldId}
          onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
          style={{
            appearance: "none",
            width: "100%",
            height: 48,
            padding: "0 40px 0 14px",
            background: "var(--neutral-0)",
            border: `1px solid ${error ? "var(--dillo-red-500)" : focus ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
            borderRadius: "var(--radius-md)",
            boxShadow: focus ? "var(--focus-ring)" : "none",
            fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-primary)",
            outline: "none",
            cursor: "pointer",
          }}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        <span style={{
          position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
          color: "var(--text-muted)", pointerEvents: "none", fontSize: 12, fontFamily: "var(--font-mono)"
        }}>▾</span>
      </div>
      {error ? (
        <span style={{ fontSize: 13, color: "var(--dillo-red-600)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
