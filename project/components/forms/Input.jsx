import React from "react";

export function Input({ label, hint, error, iconLeft, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, ...style }}>
      {label ? (
        <label htmlFor={fieldId} style={{
          fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 13,
          color: "var(--text-primary)", letterSpacing: 0.1
        }}>{label}</label>
      ) : null}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "0 14px",
        height: 48,
        background: "var(--neutral-0)",
        border: `1px solid ${error ? "var(--dillo-red-500)" : focus ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
        borderRadius: "var(--radius-md)",
        boxShadow: focus ? "var(--focus-ring)" : "none",
        transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      }}>
        {iconLeft ? <span style={{ color: "var(--text-muted)", display: "inline-flex" }}>{iconLeft}</span> : null}
        <input
          {...rest}
          id={fieldId}
          onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
          style={{
            flex: 1, border: "none", outline: "none", background: "transparent",
            fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-primary)",
            height: "100%",
          }}
        />
      </div>
      {error ? (
        <span style={{ fontSize: 13, color: "var(--dillo-red-600)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
