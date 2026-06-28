import React from "react";

export function Textarea({ label, hint, error, id, style, rows = 4, ...rest }) {
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
      <textarea
        {...rest}
        id={fieldId}
        rows={rows}
        onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
        style={{
          padding: "12px 14px",
          background: "var(--neutral-0)",
          border: `1px solid ${error ? "var(--dillo-red-500)" : focus ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
          borderRadius: "var(--radius-md)",
          boxShadow: focus ? "var(--focus-ring)" : "none",
          fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-primary)",
          resize: "vertical",
          minHeight: 96,
          outline: "none",
          transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
      />
      {error ? (
        <span style={{ fontSize: 13, color: "var(--dillo-red-600)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
