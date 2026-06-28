/* @ds-bundle: {"format":3,"namespace":"DilloUniformsDesignSystem_8624ed","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProcessStep","sourcePath":"components/feedback/ProcessStep.jsx"},{"name":"SectionHeader","sourcePath":"components/feedback/SectionHeader.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"WhatsAppFab","sourcePath":"components/navigation/WhatsAppFab.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProductCard","sourcePath":"components/surfaces/ProductCard.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/surfaces/TestimonialCard.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"06045d085500","components/feedback/ProcessStep.jsx":"ea0fd7e0260b","components/feedback/SectionHeader.jsx":"448c98dca5d7","components/forms/Button.jsx":"bf0b4d29effb","components/forms/IconButton.jsx":"1ae16e880331","components/forms/Input.jsx":"e8a629d4882d","components/forms/Select.jsx":"7a9c63567300","components/forms/Textarea.jsx":"3eafc0cec692","components/layout/Section.jsx":"ed1baa744c41","components/navigation/Footer.jsx":"94781d8e041a","components/navigation/NavBar.jsx":"2e5a98644211","components/navigation/WhatsAppFab.jsx":"f0058ab919ea","components/surfaces/Card.jsx":"c47c4f554451","components/surfaces/ProductCard.jsx":"6002bfee1d95","components/surfaces/StatCard.jsx":"f6af6f741344","components/surfaces/TestimonialCard.jsx":"6b4a7084a124","ui_kits/marketing-website/AboutPage.jsx":"2a7554a2cb9d","ui_kits/marketing-website/ContactPage.jsx":"40185275a228","ui_kits/marketing-website/HomePage.jsx":"10b831a78bae","ui_kits/marketing-website/PortfolioPage.jsx":"d834b0b1a4bc","ui_kits/marketing-website/ProductsPage.jsx":"645709a4c1e7","ui_kits/marketing-website/photos.js":"118851002bf3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DilloUniformsDesignSystem_8624ed = window.DilloUniformsDesignSystem_8624ed || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
const variants = {
  red: {
    bg: "var(--dillo-red-500)",
    fg: "var(--neutral-0)"
  },
  navy: {
    bg: "var(--dillo-navy-500)",
    fg: "var(--neutral-0)"
  },
  neutral: {
    bg: "var(--neutral-150)",
    fg: "var(--text-primary)"
  },
  success: {
    bg: "var(--success-50)",
    fg: "var(--success-500)"
  },
  warning: {
    bg: "var(--warning-50)",
    fg: "var(--warning-500)"
  }
};
function Badge({
  children,
  variant = "neutral",
  banner
}) {
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
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
      whiteSpace: "nowrap"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProcessStep.jsx
try { (() => {
function ProcessStep({
  number,
  title,
  description,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 56,
      lineHeight: 1,
      color: "var(--dillo-red-500)",
      letterSpacing: "-0.02em"
    }
  }, number), icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: "var(--radius-md)",
      background: "var(--dillo-navy-50)",
      color: "var(--dillo-navy-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, icon) : null), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 48,
      height: 4,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: 0,
      lineHeight: 1.55
    }
  }, description)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onDark
}) {
  const textColor = onDark ? "var(--neutral-0)" : "var(--text-primary)";
  const descColor = onDark ? "rgba(255,255,255,0.78)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      maxWidth: align === "center" ? 720 : "none",
      margin: align === "center" ? "0 auto" : 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "var(--dillo-red-500)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: textColor,
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 64,
      height: 4,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: 0
    }
  }), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: descColor,
      margin: 0,
      maxWidth: 640
    }
  }, description) : null);
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: "8px 14px",
    fontSize: 14,
    gap: 6,
    height: 36
  },
  md: {
    padding: "12px 22px",
    fontSize: 15,
    gap: 8,
    height: 44
  },
  lg: {
    padding: "16px 28px",
    fontSize: 17,
    gap: 10,
    height: 56
  }
};
const variants = {
  primary: {
    background: "var(--dillo-red-500)",
    color: "var(--neutral-0)",
    border: "1px solid var(--dillo-red-500)",
    hoverBg: "var(--dillo-red-600)",
    hoverBorder: "var(--dillo-red-600)"
  },
  navy: {
    background: "var(--dillo-navy-500)",
    color: "var(--neutral-0)",
    border: "1px solid var(--dillo-navy-500)",
    hoverBg: "var(--dillo-navy-600)",
    hoverBorder: "var(--dillo-navy-600)"
  },
  secondary: {
    background: "var(--neutral-0)",
    color: "var(--dillo-navy-500)",
    border: "1px solid var(--dillo-navy-500)",
    hoverBg: "var(--dillo-navy-50)",
    hoverBorder: "var(--dillo-navy-500)"
  },
  ghost: {
    background: "transparent",
    color: "var(--dillo-navy-500)",
    border: "1px solid transparent",
    hoverBg: "var(--neutral-100)",
    hoverBorder: "transparent"
  },
  danger: {
    background: "var(--dillo-red-600)",
    color: "var(--neutral-0)",
    border: "1px solid var(--dillo-red-600)",
    hoverBg: "var(--dillo-red-700)",
    hoverBorder: "var(--dillo-red-700)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  block,
  style,
  children,
  disabled,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = sizes[size];
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    disabled: disabled,
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHover(false);
      setPress(false);
      onMouseLeave?.(e);
    },
    onMouseDown: e => {
      setPress(true);
      onMouseDown?.(e);
    },
    onMouseUp: e => {
      setPress(false);
      onMouseUp?.(e);
    },
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: s.fontSize,
      letterSpacing: 0.1,
      lineHeight: 1,
      padding: s.padding,
      height: s.height,
      background: hover && !disabled ? v.hoverBg : v.background,
      color: v.color,
      border: hover && !disabled ? `1px solid ${v.hoverBorder.replace('1px solid ', '')}` : v.border,
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      transform: press && !disabled ? "translateY(1px)" : "translateY(0)",
      boxShadow: "none",
      whiteSpace: "nowrap",
      ...style
    }
  }), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("span", null, children), iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 40,
  lg: 48
};
const variants = {
  primary: {
    bg: "var(--dillo-red-500)",
    color: "var(--neutral-0)",
    border: "var(--dillo-red-500)",
    hover: "var(--dillo-red-600)"
  },
  navy: {
    bg: "var(--dillo-navy-500)",
    color: "var(--neutral-0)",
    border: "var(--dillo-navy-500)",
    hover: "var(--dillo-navy-600)"
  },
  secondary: {
    bg: "var(--neutral-0)",
    color: "var(--dillo-navy-500)",
    border: "var(--border-default)",
    hover: "var(--neutral-100)"
  },
  ghost: {
    bg: "transparent",
    color: "var(--dillo-navy-500)",
    border: "transparent",
    hover: "var(--neutral-100)"
  }
};
function IconButton({
  variant = "secondary",
  size = "md",
  style,
  children,
  onMouseEnter,
  onMouseLeave,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant];
  const d = sizes[size];
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    onMouseEnter: e => {
      setHover(true);
      onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHover(false);
      onMouseLeave?.(e);
    },
    style: {
      width: d,
      height: d,
      padding: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-md)",
      background: hover ? v.hover : v.bg,
      color: v.color,
      border: `1px solid ${v.border}`,
      cursor: "pointer",
      transition: "background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  iconLeft,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text-primary)",
      letterSpacing: 0.1
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 14px",
      height: 48,
      background: "var(--neutral-0)",
      border: `1px solid ${error ? "var(--dillo-red-500)" : focus ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      display: "inline-flex"
    }
  }, iconLeft) : null, /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      height: "100%"
    }
  }))), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--dillo-red-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  error,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text-primary)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({}, rest, {
    id: fieldId,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      appearance: "none",
      width: "100%",
      height: 48,
      padding: "0 40px 0 14px",
      background: "var(--neutral-0)",
      border: `1px solid ${error ? "var(--dillo-red-500)" : focus ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      outline: "none",
      cursor: "pointer"
    }
  }), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      pointerEvents: "none",
      fontSize: 12,
      fontFamily: "var(--font-mono)"
    }
  }, "\u25BE")), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--dillo-red-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  error,
  id,
  style,
  rows = 4,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId();
  const fieldId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 13,
      color: "var(--text-primary)",
      letterSpacing: 0.1
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({}, rest, {
    id: fieldId,
    rows: rows,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      padding: "12px 14px",
      background: "var(--neutral-0)",
      border: `1px solid ${error ? "var(--dillo-red-500)" : focus ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      resize: "vertical",
      minHeight: 96,
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  })), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--dillo-red-600)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  white: {
    background: "var(--bg-page)",
    color: "var(--text-primary)"
  },
  alt: {
    background: "var(--bg-page-alt)",
    color: "var(--text-primary)"
  },
  navy: {
    background: "var(--dillo-navy-500)",
    color: "var(--neutral-0)"
  },
  red: {
    background: "var(--dillo-red-500)",
    color: "var(--neutral-0)"
  }
};
const pads = {
  md: "64px 0",
  lg: "96px 0"
};
function Section({
  tone = "white",
  pad = "lg",
  bottomRule,
  children,
  style,
  ...rest
}) {
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("section", _extends({}, rest, {
    style: {
      background: t.background,
      color: t.color,
      padding: pads[pad],
      position: "relative",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dillo-container"
  }, children), bottomRule ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 6,
      background: "var(--dillo-red-500)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const colLabel = {
  fontFamily: "var(--font-heading)",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "var(--ls-eyebrow)",
  textTransform: "uppercase",
  color: "var(--dillo-red-400)"
};
const link = {
  fontSize: 14,
  color: "rgba(255,255,255,0.78)",
  textDecoration: "none",
  padding: "4px 0",
  display: "block"
};
function Footer({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--dillo-navy-500)",
      color: "var(--neutral-0)",
      paddingTop: 80,
      paddingBottom: 24,
      borderTop: "4px solid var(--dillo-red-500)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      background: "var(--dillo-red-500)",
      color: "var(--neutral-0)",
      padding: "6px 14px",
      borderRadius: 2,
      fontFamily: "var(--font-display)",
      fontSize: 24
    }
  }, "DILLO"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      color: "rgba(255,255,255,0.85)",
      fontSize: 16,
      margin: 0
    }
  }, "The Perfect Uniform Makers"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "rgba(255,255,255,0.7)",
      fontSize: 14,
      lineHeight: 1.6,
      maxWidth: 320,
      marginTop: 8
    }
  }, "Stitching uniforms for hospitals, hotels, schools and factories across India since 2005.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colLabel
  }, "Products"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("products");
    },
    href: "#"
  }, "Healthcare"), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("products");
    },
    href: "#"
  }, "Hospitality"), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("products");
    },
    href: "#"
  }, "School"), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("products");
    },
    href: "#"
  }, "Industrial"), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("products");
    },
    href: "#"
  }, "Corporate T-Shirts"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colLabel
  }, "Company"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("about");
    },
    href: "#"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("portfolio");
    },
    href: "#"
  }, "Portfolio"), /*#__PURE__*/React.createElement("a", {
    style: link,
    onClick: e => {
      e.preventDefault();
      onNavigate?.("contact");
    },
    href: "#"
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    style: link,
    href: "#"
  }, "Careers"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: colLabel
  }, "Reach us"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: 14,
      color: "rgba(255,255,255,0.78)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCCD Plot 27, MIDC Phase II,", /*#__PURE__*/React.createElement("br", null), "Andheri East, Mumbai 400093"), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCDE +91 98202 12345"), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDCE7 hello@dillouniforms.com"), /*#__PURE__*/React.createElement("div", null, "\uD83D\uDD52 Mon\u2013Sat \xB7 9:30\u201318:30")))), /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      marginTop: 56,
      paddingTop: 24,
      borderTop: "1px solid rgba(255,255,255,0.12)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 12,
      color: "rgba(255,255,255,0.55)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "\xA9 ", new Date().getFullYear(), " Dillo Uniforms Pvt. Ltd. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "Privacy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.55)"
    }
  }, "Terms"))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const links = [{
  key: "home",
  label: "Home"
}, {
  key: "about",
  label: "About"
}, {
  key: "products",
  label: "Products"
}, {
  key: "portfolio",
  label: "Portfolio"
}, {
  key: "contact",
  label: "Contact"
}];
function NavBar({
  active = "home",
  onNavigate,
  onCta
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "var(--neutral-0)",
      borderBottom: `1px solid ${scrolled ? "var(--border-default)" : "transparent"}`,
      boxShadow: scrolled ? "var(--shadow-xs)" : "none",
      transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 24,
      height: 72
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home",
    onClick: e => {
      e.preventDefault();
      onNavigate?.("home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: "var(--dillo-red-500)",
      color: "var(--neutral-0)",
      padding: "6px 12px",
      borderRadius: 2,
      fontFamily: "var(--font-display)",
      fontSize: 22,
      letterSpacing: 0.02 + "em",
      lineHeight: 1
    }
  }, "DILLO"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      color: "var(--dillo-navy-500)",
      fontSize: 14
    }
  }, "The Perfect Uniform Makers")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4,
      marginLeft: "auto"
    }
  }, links.map(l => {
    const isActive = active === l.key;
    return /*#__PURE__*/React.createElement("a", {
      key: l.key,
      href: `#${l.key}`,
      onClick: e => {
        e.preventDefault();
        onNavigate?.(l.key);
      },
      style: {
        position: "relative",
        padding: "10px 14px",
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        fontSize: 14,
        color: isActive ? "var(--dillo-red-500)" : "var(--text-primary)",
        textDecoration: "none",
        borderRadius: "var(--radius-md)",
        transition: "color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)"
      }
    }, l.label, isActive ? /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 14,
        right: 14,
        bottom: 4,
        height: 3,
        background: "var(--dillo-red-500)"
      }
    }) : null);
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, "Get a quote")));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/WhatsAppFab.jsx
try { (() => {
function WhatsAppFab({
  phone = "919820212345",
  message = "Hi Dillo, I'd like a uniform quote."
}) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    "aria-label": "Chat with us on WhatsApp",
    style: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 60,
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      background: "#25D366",
      color: "#fff",
      padding: "12px 18px",
      borderRadius: "var(--radius-pill)",
      boxShadow: hover ? "var(--shadow-xl)" : "var(--shadow-lg)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14,
      textDecoration: "none",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      transform: hover ? "translateY(-2px)" : "translateY(0)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.7 3.3.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.6 15.5 2 13.8 2 12 2 6.5 6.5 2 12 2c2.7 0 5.2 1 7.1 2.9C20.9 6.8 22 9.3 22 12c0 5.5-4.5 9.8-10 9.8z"
  })), /*#__PURE__*/React.createElement("span", null, "WhatsApp us"));
}
Object.assign(__ds_scope, { WhatsAppFab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/WhatsAppFab.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const pads = {
  none: 0,
  sm: 16,
  md: 24,
  lg: 32
};
const variants = {
  default: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-default)",
    shadow: "var(--shadow-xs)"
  },
  raised: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    shadow: "var(--shadow-md)"
  },
  outline: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-strong)",
    shadow: "none"
  },
  navy: {
    background: "var(--dillo-navy-500)",
    border: "1px solid var(--dillo-navy-500)",
    shadow: "var(--shadow-md)",
    color: "var(--neutral-0)"
  }
};
function Card({
  pad = "md",
  variant = "default",
  interactive,
  style,
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = variants[variant];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter?.(e);
    },
    onMouseLeave: e => {
      setHover(false);
      rest.onMouseLeave?.(e);
    },
    style: {
      position: "relative",
      background: v.background,
      color: v.color || "var(--text-primary)",
      border: v.border,
      borderRadius: "var(--radius-lg)",
      padding: pads[pad],
      boxShadow: interactive && hover ? "var(--shadow-lg)" : v.shadow,
      cursor: interactive ? "pointer" : "default",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      transform: interactive && hover ? "translateY(-2px)" : "translateY(0)",
      overflow: "hidden",
      ...style
    }
  }), children, interactive ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 3,
      background: "var(--dillo-red-500)",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductCard.jsx
try { (() => {
function ProductCard({
  title,
  description,
  imageSrc,
  items = [],
  ctaLabel = "Explore",
  onCta
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-xs)",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      background: imageSrc ? `center/cover no-repeat url(${imageSrc})` : "var(--dillo-navy-100)"
    }
  }, !imageSrc && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--dillo-navy-300)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "image"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      background: "var(--dillo-red-500)",
      color: "var(--neutral-0)",
      padding: "6px 14px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "Uniforms")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      margin: 0,
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      margin: 0
    }
  }, description), items.length > 0 && /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "4px 0 0",
      display: "flex",
      flexWrap: "wrap",
      gap: 6
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-secondary)",
      background: "var(--neutral-100)",
      padding: "4px 10px",
      borderRadius: "var(--radius-pill)"
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onCta,
    iconRight: /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true
    }, "\u2192")
  }, ctaLabel))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 4,
      background: "var(--dillo-red-500)",
      transform: hover ? "scaleX(1)" : "scaleX(0)",
      transformOrigin: "left",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  }));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  icon,
  onDark
}) {
  const color = onDark ? "var(--neutral-0)" : "var(--text-primary)";
  const sub = onDark ? "rgba(255,255,255,0.7)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      paddingLeft: 20,
      borderLeft: "4px solid var(--dillo-red-500)"
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      color,
      marginBottom: 4
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 56,
      lineHeight: 1,
      color,
      letterSpacing: "-0.02em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: sub
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  author,
  role,
  avatarSrc
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20,
      boxShadow: "var(--shadow-xs)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: 16,
      right: 24,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 96,
      lineHeight: 1,
      color: "var(--dillo-red-100)",
      userSelect: "none"
    }
  }, "\""), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontSize: 20,
      lineHeight: 1.4,
      color: "var(--text-primary)"
    }
  }, "\"", quote, "\""), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: "auto"
    }
  }, avatarSrc ? /*#__PURE__*/React.createElement("img", {
    src: avatarSrc,
    alt: "",
    width: 44,
    height: 44,
    style: {
      borderRadius: "var(--radius-pill)",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      background: "var(--dillo-navy-100)",
      color: "var(--dillo-navy-500)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 700
    }
  }, author.split(" ").map(w => w[0]).slice(0, 2).join("")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      color: "var(--text-primary)"
    }
  }, author), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/AboutPage.jsx
try { (() => {
/* AboutPage — Company story, experience, industries, manufacturing, CTA. */

const NS_About = window.DilloUniformsDesignSystem_8624ed;
const {
  Section: AboutSection,
  SectionHeader: AboutHeader,
  StatCard: AboutStat,
  Button: AboutBtn,
  ProcessStep: AboutStep,
  Card: AboutCard
} = NS_About;
const P_A = window.DILLO_PHOTOS;
function AboutHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dillo-navy-500)",
      color: "#fff",
      padding: "120px 0 96px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dillo-eyebrow",
    style: {
      color: "var(--dillo-red-400)"
    }
  }, "About Dillo"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: 0
    }
  }, "A family of stitchers, on the Mumbai floor since 2005."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 96,
      height: 6,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: "8px 0"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 560,
      fontFamily: "var(--font-serif)",
      fontStyle: "italic"
    }
  }, "\"We've never sold a uniform we wouldn't put on our own team.\"")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 380,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-xl)",
      border: "1px solid rgba(255,255,255,0.1)",
      background: `center/cover url(${P_A.team})`
    }
  })));
}
function Story() {
  return /*#__PURE__*/React.createElement(AboutSection, {
    tone: "white",
    pad: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement(AboutHeader, {
    eyebrow: "Our story",
    title: "Twenty years of stitching."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      color: "var(--text-primary)",
      fontSize: 17,
      lineHeight: 1.7
    }
  }, /*#__PURE__*/React.createElement("p", null, "Dillo started in 2005 as a 12-machine workshop in Andheri East, stitching scrubs for a single local hospital. Twenty years on, we run a 240-machine floor and ship to 450 clients across India \u2014 but the founding family is still on the floor every morning."), /*#__PURE__*/React.createElement("p", null, "We don't outsource. Every uniform that ships under the Dillo banner is cut, stitched and finished in our own factory, by people we know by name. That's why we can promise a fabric grade across six hospitals or a stitch tolerance across four thousand school shirts \u2014 we can see it happening."))));
}
function Experience() {
  return /*#__PURE__*/React.createElement(AboutSection, {
    tone: "alt",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(AboutHeader, {
    eyebrow: "Our experience",
    title: "By the numbers."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 48,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(AboutStat, {
    value: "20+",
    label: "Years stitching"
  }), /*#__PURE__*/React.createElement(AboutStat, {
    value: "2.4M+",
    label: "Uniforms delivered"
  }), /*#__PURE__*/React.createElement(AboutStat, {
    value: "240",
    label: "Stitching machines"
  }), /*#__PURE__*/React.createElement(AboutStat, {
    value: "14",
    label: "Indian states served"
  })));
}
function Industries() {
  const list = [{
    t: "Healthcare",
    d: "Hospitals, clinics, diagnostic chains. 6 of India's top-50 hospital groups."
  }, {
    t: "Hospitality",
    d: "Hotels, restaurants, cafés. From 50-room boutiques to 800-room chains."
  }, {
    t: "Educational",
    d: "Schools, colleges and training institutes. K-12 specialty."
  }, {
    t: "Industrial",
    d: "Manufacturing, logistics, construction. FR & hi-vis certified lines."
  }, {
    t: "Corporate",
    d: "Agencies, startups, event teams. Quick-turn branded tees and polos."
  }];
  return /*#__PURE__*/React.createElement(AboutSection, {
    tone: "white",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(AboutHeader, {
    eyebrow: "Industries we serve",
    title: "Five verticals, decades of fluency."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 16,
      marginTop: 56
    }
  }, list.map(i => /*#__PURE__*/React.createElement(AboutCard, {
    key: i.t,
    pad: "md",
    interactive: true
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: "0 0 8px"
    }
  }, i.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, i.d)))));
}
function Manufacturing() {
  const steps = [{
    n: "01",
    t: "Source",
    d: "Fabric direct from Coimbatore mills, lab-tested for shrinkage, colour-fastness and GSM."
  }, {
    n: "02",
    t: "Cut",
    d: "Computerised pattern cutting on 6-layer tables. <1mm tolerance across the run."
  }, {
    n: "03",
    t: "Stitch",
    d: "240 industrial machines across single-needle, overlock and bartack lines."
  }, {
    n: "04",
    t: "Finish",
    d: "Press, fold, tag and pack with batch-level QC. Each carton ships with a QR check sheet."
  }, {
    n: "05",
    t: "Deliver",
    d: "Door-to-door delivery across India through vetted logistics partners."
  }];
  return /*#__PURE__*/React.createElement(AboutSection, {
    tone: "alt",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(AboutHeader, {
    eyebrow: "Manufacturing process",
    title: "What happens on our floor."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 32,
      marginTop: 56
    }
  }, steps.map(s => /*#__PURE__*/React.createElement(AboutStep, {
    key: s.n,
    number: s.n,
    title: s.t,
    description: s.d
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: `center/cover url(${P_A.fabric})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: `center/cover url(${P_A.stitching})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: `center/cover url(${P_A.warehouse})`
    }
  })));
}
function AboutCTA({
  onContact
}) {
  return /*#__PURE__*/React.createElement(AboutSection, {
    tone: "red",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 40,
      lineHeight: 1.1,
      letterSpacing: "-0.02em"
    }
  }, "Tour our floor \u2014 virtually or in person."), /*#__PURE__*/React.createElement(AboutBtn, {
    variant: "navy",
    size: "lg",
    onClick: onContact
  }, "Get in touch")));
}
function AboutPage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AboutHero, null), /*#__PURE__*/React.createElement(Story, null), /*#__PURE__*/React.createElement(Experience, null), /*#__PURE__*/React.createElement(Industries, null), /*#__PURE__*/React.createElement(Manufacturing, null), /*#__PURE__*/React.createElement(AboutCTA, {
    onContact: () => onNavigate("contact")
  }));
}
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/ContactPage.jsx
try { (() => {
/* ContactPage — quote form + contact details + WhatsApp + map. */

const NS_C = window.DilloUniformsDesignSystem_8624ed;
const {
  Section: CSection,
  SectionHeader: CHeader,
  Input: CInput,
  Textarea: CTextarea,
  Select: CSelect,
  Button: CBtn,
  Card: CCard
} = NS_C;
function ContactHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--dillo-navy-500)",
      color: "#fff",
      padding: "96px 0 64px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      maxWidth: 880
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dillo-eyebrow",
    style: {
      color: "var(--dillo-red-400)"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: "12px 0 16px",
      color: "#fff"
    }
  }, "Tell us what you need."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 96,
      height: 6,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 20,
      fontSize: 19,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.85)"
    }
  }, "A quote within 24 hours. A stitched sample within a week. Same family-run quality bar across every category.")));
}
function ContactBody({
  onSubmit
}) {
  const [form, setForm] = React.useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "healthcare",
    quantity: "",
    message: ""
  });
  const [sent, setSent] = React.useState(false);
  const update = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    setSent(true);
    onSubmit?.(form);
  };
  return /*#__PURE__*/React.createElement(CSection, {
    tone: "white",
    pad: "lg",
    style: {
      paddingTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      padding: 40,
      boxShadow: "var(--shadow-md)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--dillo-red-500)",
      color: "#fff",
      fontFamily: "var(--font-display)",
      fontSize: 18
    }
  }, "D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 22,
      color: "var(--text-primary)"
    }
  }, "Request a quote"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "We respond within one business day."))), /*#__PURE__*/React.createElement("hr", {
    className: "dillo-rule"
  }), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 16px",
      background: "var(--success-50)",
      border: "1px solid var(--success-500)",
      borderRadius: "var(--radius-md)",
      color: "var(--success-500)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 18
    }
  }, "\u2713"), "Thanks ", form.name || "—", ". We've received your request and will reply by phone or email shortly.") : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(CInput, {
    label: "Name",
    placeholder: "Anita Krishnan",
    value: form.name,
    onChange: update("name"),
    required: true
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Company name",
    placeholder: "MedStar Hospitals",
    value: form.company,
    onChange: update("company")
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Phone",
    placeholder: "+91 \u2026",
    value: form.phone,
    onChange: update("phone"),
    required: true
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Email",
    type: "email",
    placeholder: "you@company.com",
    value: form.email,
    onChange: update("email"),
    required: true
  }), /*#__PURE__*/React.createElement(CSelect, {
    label: "Requirement",
    value: form.requirement,
    onChange: update("requirement"),
    options: [{
      value: "healthcare",
      label: "Healthcare uniforms"
    }, {
      value: "hospitality",
      label: "Hospitality uniforms"
    }, {
      value: "educational",
      label: "Educational uniforms"
    }, {
      value: "industrial",
      label: "Industrial uniforms"
    }, {
      value: "corporate",
      label: "Corporate T-shirts"
    }]
  }), /*#__PURE__*/React.createElement(CInput, {
    label: "Quantity",
    placeholder: "e.g. 500 pieces",
    value: form.quantity,
    onChange: update("quantity"),
    hint: "Minimum order: 50 pieces"
  })), /*#__PURE__*/React.createElement(CTextarea, {
    label: "Message",
    rows: 4,
    placeholder: "Tell us about customisation, deadlines, or anything else.",
    value: form.message,
    onChange: update("message")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CBtn, {
    type: "submit",
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true
    }, "\u2192")
  }, "Send request"), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919820212345?text=Hi%20Dillo%2C%20I%27d%20like%20a%20uniform%20quote.",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "0 22px",
      height: 56,
      background: "#25D366",
      color: "#fff",
      borderRadius: "var(--radius-md)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 15,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3z"
  })), "WhatsApp instead"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, [{
    icon: "📍",
    t: "Address",
    v: /*#__PURE__*/React.createElement(React.Fragment, null, "Plot 27, MIDC Phase II,", /*#__PURE__*/React.createElement("br", null), "Andheri East, Mumbai 400093")
  }, {
    icon: "📞",
    t: "Phone",
    v: "+91 98202 12345"
  }, {
    icon: "📧",
    t: "Email",
    v: "hello@dillouniforms.com"
  }, {
    icon: "🕒",
    t: "Working hours",
    v: /*#__PURE__*/React.createElement(React.Fragment, null, "Mon \u2013 Sat", /*#__PURE__*/React.createElement("br", null), "09:30 \u2013 18:30 IST")
  }, {
    icon: "📱",
    t: "WhatsApp",
    v: "+91 98202 12345 — fastest"
  }].map(row => /*#__PURE__*/React.createElement("div", {
    key: row.t,
    style: {
      display: "grid",
      gridTemplateColumns: "44px 1fr",
      gap: 14,
      padding: "18px 20px",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 20,
      width: 44,
      height: 44,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--dillo-red-50)",
      borderRadius: "var(--radius-md)"
    }
  }, row.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-muted)"
    }
  }, row.t), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 15,
      color: "var(--text-primary)",
      lineHeight: 1.4
    }
  }, row.v)))))));
}
function MapBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      height: 380,
      background: "var(--bg-page-alt)",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Dillo Uniforms \u2014 Andheri East, Mumbai",
    src: "https://www.openstreetmap.org/export/embed.html?bbox=72.84%2C19.11%2C72.90%2C19.13&layer=mapnik&marker=19.12%2C72.87",
    style: {
      width: "100%",
      height: "100%",
      border: 0,
      filter: "saturate(0.85)"
    },
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 32,
      top: 32,
      padding: 20,
      background: "var(--neutral-0)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 800,
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, "Dillo Uniforms HQ"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "Plot 27, MIDC Phase II,", /*#__PURE__*/React.createElement("br", null), "Andheri East, Mumbai 400093"), /*#__PURE__*/React.createElement("hr", {
    className: "dillo-rule",
    style: {
      margin: "12px 0"
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      color: "var(--dillo-red-500)"
    }
  }, "Get directions \u2192")));
}
function ContactPage({
  onSubmit
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ContactHero, null), /*#__PURE__*/React.createElement(ContactBody, {
    onSubmit: onSubmit
  }), /*#__PURE__*/React.createElement(MapBand, null));
}
window.ContactPage = ContactPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/ContactPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/HomePage.jsx
try { (() => {
/* HomePage — the long marketing page.
   Sections: Hero · Trusted By · Why Dillo · Numbers · Products · How It Works · Testimonials · CTA */

const NS = window.DilloUniformsDesignSystem_8624ed;
const {
  Button,
  IconButton,
  Section,
  SectionHeader,
  ProductCard,
  StatCard,
  TestimonialCard,
  ProcessStep,
  Card,
  Badge
} = NS;
const P = window.DILLO_PHOTOS;
function Hero({
  onQuote,
  onProducts
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      minHeight: 640,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: `center/cover no-repeat url(${P.heroFactory})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(15,31,77,0.85) 0%, rgba(15,31,77,0.7) 50%, rgba(15,31,77,0.45) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      position: "relative",
      paddingTop: 120,
      paddingBottom: 120
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      display: "flex",
      flexDirection: "column",
      gap: 24,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      background: "var(--dillo-red-500)",
      color: "#fff",
      padding: "4px 12px",
      borderRadius: 2,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 12,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, "Trusted since 2005"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 76,
      lineHeight: 1.0,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#fff"
    }
  }, "The perfect uniform.", /*#__PURE__*/React.createElement("br", null), "Stitched on time."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 96,
      height: 6,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.5,
      color: "rgba(255,255,255,0.88)",
      maxWidth: 580
    }
  }, "Twenty years stitching uniforms for India's hospitals, hotels, classrooms and factory floors. From 50 pieces to 50,000 \u2014 same quality control either way."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onQuote,
    iconRight: /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true
    }, "\u2192")
  }, "Get a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: onProducts,
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.4)"
    }
  }, "View our work")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(10,22,56,0.85)",
      borderTop: "4px solid var(--dillo-red-500)",
      backdropFilter: "blur(8px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32,
      padding: "24px 0"
    }
  }, [["2.4M+", "Uniforms delivered"], ["20", "Years stitching"], ["450+", "Active clients"], ["5", "Industries served"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.7)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700
    }
  }, l))))));
}
function TrustedBy() {
  const logos = ["MedStar Hospitals", "Taj Hotels", "Ryan International", "Larsen & Turbo", "Welspun", "Apollo Clinics", "Hyatt Place", "DPS Group"];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--neutral-0)",
      padding: "48px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dillo-eyebrow"
  }, "Trusted by")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      borderTop: "1px solid var(--border-subtle)",
      borderLeft: "1px solid var(--border-subtle)"
    }
  }, logos.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "28px 16px",
      borderRight: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 16,
      color: "var(--neutral-400)",
      letterSpacing: 0.5
    }
  }, l)))));
}
function WhyDillo() {
  const items = [{
    t: "20 years on the floor",
    d: "Stitching uniforms since 2005, with the same family-run quality bar."
  }, {
    t: "5 verticals, one bar",
    d: "Hospital, hotel, school, factory and office — we ship to all of them."
  }, {
    t: "Fabric we'd wear",
    d: "We source our cotton and poly-blends directly from mills in Coimbatore."
  }, {
    t: "Delivered on the date",
    d: "98% on-time delivery across the last 2,400 orders. Tracked, not promised."
  }];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Why Dillo",
    title: "Built to last. Delivered on time."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 32,
      marginTop: 56
    }
  }, items.map((i, idx) => /*#__PURE__*/React.createElement("div", {
    key: i.t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignSelf: "flex-start",
      width: 56,
      height: 56,
      borderRadius: 4,
      background: "var(--dillo-red-50)",
      color: "var(--dillo-red-500)",
      fontFamily: "var(--font-display)",
      fontSize: 22,
      alignItems: "center",
      justifyContent: "center"
    }
  }, String(idx + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, i.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--text-secondary)",
      lineHeight: 1.55
    }
  }, i.d)))));
}
function Numbers() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    pad: "lg",
    bottomRule: true
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    onDark: true,
    eyebrow: "Numbers that build trust",
    title: "Two decades of stitched promise."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 48,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "2.4M+",
    label: "Uniforms delivered",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "20",
    label: "Years in business",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "450+",
    label: "Active clients",
    onDark: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "98%",
    label: "On-time delivery",
    onDark: true
  })));
}
function Products({
  onCategory
}) {
  const cats = [{
    k: "healthcare",
    t: "Healthcare uniforms",
    d: "Scrubs, lab coats, ward shirts. Built for a hundred wash cycles.",
    img: P.healthcare,
    items: ["Scrubs", "Lab coats", "Ward"]
  }, {
    k: "hospitality",
    t: "Hospitality uniforms",
    d: "Front-of-house, F&B, housekeeping and chef whites.",
    img: P.hospitality,
    items: ["F&B", "Housekeeping", "Chef whites"]
  }, {
    k: "educational",
    t: "Educational uniforms",
    d: "Shirts, trousers, skirts, blazers and sportswear.",
    img: P.educational,
    items: ["Shirts", "Blazers", "Sports"]
  }, {
    k: "industrial",
    t: "Industrial uniforms",
    d: "Coveralls, hi-vis, factory floor and PPE.",
    img: P.industrial,
    items: ["Coveralls", "Hi-vis", "PPE"]
  }, {
    k: "corporate",
    t: "Corporate T-Shirts",
    d: "Customised tees for events, agencies and internal branding.",
    img: P.corporate,
    items: ["Crew", "Polo", "Hoodies"]
  }];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Our products",
    title: "Five verticals, one quality bar.",
    description: "Pick a category \u2014 every one ships from the same Mumbai floor under the same QC team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 56
    }
  }, cats.slice(0, 3).map(c => /*#__PURE__*/React.createElement(ProductCard, {
    key: c.k,
    title: c.t,
    description: c.d,
    imageSrc: c.img,
    items: c.items,
    onCta: () => onCategory(c.k)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 24
    }
  }, cats.slice(3).map(c => /*#__PURE__*/React.createElement(ProductCard, {
    key: c.k,
    title: c.t,
    description: c.d,
    imageSrc: c.img,
    items: c.items,
    onCta: () => onCategory(c.k)
  }))));
}
function HowItWorks() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "white",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "How it works",
    title: "From brief to delivery in four steps."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 48,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(ProcessStep, {
    number: "01",
    title: "Brief us",
    description: "Tell us the industry, quantity, customisation and target date."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "02",
    title: "Sample & fit",
    description: "We send a stitched sample in 5\u20137 days for your approval."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "03",
    title: "Stitch & QC",
    description: "Bulk production on our Mumbai floor with batch QC at every stage."
  }), /*#__PURE__*/React.createElement(ProcessStep, {
    number: "04",
    title: "Deliver",
    description: "Door-to-door delivery across India, tracked end-to-end."
  })));
}
function Testimonials() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Client testimonials",
    title: "Twenty years, four hundred clients."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Six hospitals, same fabric grade across all of them. Dillo just gets it.",
    author: "Dr. Anita Krishnan",
    role: "Procurement Head, MedStar Hospitals",
    avatarSrc: P.portrait1
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "We've reordered 14 times. That's the simplest review I can give.",
    author: "Vikram Mehta",
    role: "GM, Hyatt Place Mumbai",
    avatarSrc: P.portrait2
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Our 4,200 students kitted out without a single missed deadline.",
    author: "Sister Mary Lobo",
    role: "Principal, St. Xavier's School",
    avatarSrc: P.portrait3
  })));
}
function CTA({
  onQuote,
  onContact
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "red",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 44,
      lineHeight: 1.1,
      letterSpacing: "-0.02em"
    }
  }, "Ready to kit your team out?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 12,
      fontSize: 18,
      color: "rgba(255,255,255,0.92)"
    }
  }, "Tell us what you need \u2014 we'll quote within 24 hours.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "navy",
    size: "lg",
    onClick: onQuote
  }, "Get a quote"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: onContact,
    style: {
      color: "#fff",
      borderColor: "rgba(255,255,255,0.45)"
    }
  }, "Contact us"))));
}
function HomePage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onQuote: () => onNavigate("contact"),
    onProducts: () => onNavigate("portfolio")
  }), /*#__PURE__*/React.createElement(TrustedBy, null), /*#__PURE__*/React.createElement(WhyDillo, null), /*#__PURE__*/React.createElement(Numbers, null), /*#__PURE__*/React.createElement(Products, {
    onCategory: () => onNavigate("products")
  }), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Testimonials, null), /*#__PURE__*/React.createElement(CTA, {
    onQuote: () => onNavigate("contact"),
    onContact: () => onNavigate("contact")
  }));
}
window.HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/PortfolioPage.jsx
try { (() => {
/* PortfolioPage — case study grid. */

const NS_Port = window.DilloUniformsDesignSystem_8624ed;
const {
  Section: PortSection,
  SectionHeader: PortHeader,
  Card: PortCard,
  Button: PortBtn
} = NS_Port;
const PPP = window.DILLO_PHOTOS;
const PROJECTS = [{
  name: "MedStar Hospitals",
  loc: "Mumbai, Pune, Nashik",
  qty: "12,400 pieces",
  img: PPP.healthcare,
  vert: "Healthcare",
  year: "2024"
}, {
  name: "Hyatt Place",
  loc: "Mumbai",
  qty: "1,850 pieces",
  img: PPP.hospitality,
  vert: "Hospitality",
  year: "2024"
}, {
  name: "St. Xavier's School",
  loc: "Mumbai",
  qty: "4,200 pieces",
  img: PPP.educational,
  vert: "Educational",
  year: "2023"
}, {
  name: "Welspun Manufacturing",
  loc: "Vapi, Gujarat",
  qty: "3,600 pieces",
  img: PPP.industrial,
  vert: "Industrial",
  year: "2024"
}, {
  name: "Razorpay Hackathon",
  loc: "Bangalore",
  qty: "850 tees",
  img: PPP.corporate,
  vert: "Corporate",
  year: "2025"
}, {
  name: "Apollo Diagnostics",
  loc: "Pan-India",
  qty: "8,900 pieces",
  img: PPP.healthcare,
  vert: "Healthcare",
  year: "2023"
}, {
  name: "Taj Bengal",
  loc: "Kolkata",
  qty: "2,200 pieces",
  img: PPP.hospitality,
  vert: "Hospitality",
  year: "2022"
}, {
  name: "Ryan International",
  loc: "16 campuses",
  qty: "18,400 pieces",
  img: PPP.educational,
  vert: "Educational",
  year: "2024"
}];
function PortfolioHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page-alt)",
      padding: "96px 0 64px",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18,
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dillo-eyebrow"
  }, "Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 64,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, "Work we've stitched."), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 96,
      height: 6,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--text-secondary)"
    }
  }, "A small sample of the four-fifty clients we ship to. Hospital groups, hotels, schools, factory floors and event teams.")));
}
function FilterBar({
  active,
  setActive
}) {
  const verts = ["All", "Healthcare", "Hospitality", "Educational", "Industrial", "Corporate"];
  return /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "flex",
      gap: 8,
      padding: "32px 24px 0",
      flexWrap: "wrap"
    }
  }, verts.map(v => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setActive(v),
    style: {
      padding: "8px 14px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      background: active === v ? "var(--dillo-navy-500)" : "transparent",
      color: active === v ? "#fff" : "var(--text-primary)",
      border: `1px solid ${active === v ? "var(--dillo-navy-500)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-pill)",
      cursor: "pointer"
    }
  }, v)));
}
function ProjectCard({
  p
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-xs)",
      transform: hover ? "translateY(-3px)" : "translateY(0)",
      transition: "all var(--dur-base) var(--ease-out)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: `center/cover url(${p.img})`,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, transparent 50%, rgba(15,31,77,0.78) 100%)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      background: "var(--dillo-red-500)",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: 2,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, p.vert), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 16,
      right: 16,
      bottom: 12,
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: 0.5,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, p.loc), /*#__PURE__*/React.createElement("span", null, p.year))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      color: "var(--dillo-red-500)",
      letterSpacing: "-0.02em"
    }
  }, p.qty)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 12,
      color: "var(--text-muted)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      fontFamily: "var(--font-heading)",
      fontWeight: 700
    }
  }, "delivered")));
}
function PortfolioGrid() {
  const [active, setActive] = React.useState("All");
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter(p => p.vert === active);
  return /*#__PURE__*/React.createElement(PortSection, {
    tone: "white",
    pad: "lg",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(FilterBar, {
    active: active,
    setActive: setActive
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 40
    }
  }, filtered.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.name + p.year,
    p: p
  }))));
}
function PortfolioCTA({
  onContact
}) {
  return /*#__PURE__*/React.createElement(PortSection, {
    tone: "red",
    pad: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 36,
      letterSpacing: "-0.02em"
    }
  }, "Want yours on this page next?"), /*#__PURE__*/React.createElement(PortBtn, {
    variant: "navy",
    size: "lg",
    onClick: onContact
  }, "Start a project")));
}
function PortfolioPage({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PortfolioHero, null), /*#__PURE__*/React.createElement(PortfolioGrid, null), /*#__PURE__*/React.createElement(PortfolioCTA, {
    onContact: () => onNavigate("contact")
  }));
}
window.PortfolioPage = PortfolioPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/PortfolioPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/ProductsPage.jsx
try { (() => {
/* ProductsPage — category landing.
   Sub-nav of categories, hero per category, item grid, CTA. */

const NS_Prod = window.DilloUniformsDesignSystem_8624ed;
const {
  Section: PSection,
  SectionHeader: PHeader,
  Button: PBtn,
  Card: PCard,
  Badge: PBadge
} = NS_Prod;
const PP = window.DILLO_PHOTOS;
const CATEGORIES = {
  healthcare: {
    t: "Healthcare uniforms",
    blurb: "Scrubs, lab coats, ward shirts and OT gowns. Anti-microbial finish, built for a hundred wash cycles.",
    img: PP.healthcare,
    items: ["V-neck scrubs", "Lab coats", "Ward shirts", "OT gowns", "Patient gowns", "Caps & masks"]
  },
  hospitality: {
    t: "Hospitality uniforms",
    blurb: "Front-of-house, F&B, housekeeping and chef whites. Tailored to your brand palette.",
    img: PP.hospitality,
    items: ["Reception suits", "F&B vests", "Housekeeping sets", "Chef coats", "Apron sets", "Bell-boy uniforms"]
  },
  educational: {
    t: "Educational uniforms",
    blurb: "Shirts, trousers, skirts, blazers and sportswear. K-12 specialty with consistent fabric across grades.",
    img: PP.educational,
    items: ["Shirts", "Trousers/skirts", "Blazers", "Ties & belts", "Sportswear", "House T-shirts"]
  },
  industrial: {
    t: "Industrial uniforms",
    blurb: "Coveralls, hi-vis, work shirts and PPE. FR-certified lines for hazardous environments.",
    img: PP.industrial,
    items: ["Coveralls", "Hi-vis vests", "Work shirts", "Cargo trousers", "FR jackets", "Safety caps"]
  },
  corporate: {
    t: "Corporate T-shirts",
    blurb: "Customised tees, polos and hoodies for events, agencies and internal branding. As few as 50 pieces.",
    img: PP.corporate,
    items: ["Crew tees", "Polos", "Hoodies", "Quarter-zips", "Caps", "Tote sets"]
  }
};
function CategoryNav({
  active,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 72,
      zIndex: 40,
      background: "var(--neutral-0)",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "flex",
      gap: 4,
      overflowX: "auto",
      padding: "12px 24px"
    }
  }, Object.entries(CATEGORIES).map(([k, c]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => onSelect(k),
    style: {
      padding: "10px 18px",
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 14,
      background: active === k ? "var(--dillo-red-500)" : "transparent",
      color: active === k ? "#fff" : "var(--text-primary)",
      border: active === k ? "1px solid var(--dillo-red-500)" : "1px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "background var(--dur-base) var(--ease-out)"
    }
  }, c.t))));
}
function CategoryHero({
  cat,
  onQuote
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-page-alt)",
      padding: "64px 0",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dillo-container",
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dillo-eyebrow"
  }, "Products"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 56,
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
      margin: 0
    }
  }, cat.t), /*#__PURE__*/React.createElement("hr", {
    style: {
      width: 64,
      height: 4,
      background: "var(--dillo-red-500)",
      border: 0,
      margin: 0
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.55,
      color: "var(--text-secondary)",
      maxWidth: 560
    }
  }, cat.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(PBtn, {
    variant: "primary",
    size: "lg",
    onClick: onQuote
  }, "Request a sample"), /*#__PURE__*/React.createElement(PBtn, {
    variant: "secondary",
    size: "lg",
    onClick: onQuote
  }, "Talk to us"))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 360,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: `center/cover url(${cat.img})`,
      boxShadow: "var(--shadow-lg)"
    }
  })));
}
function ItemGrid({
  cat
}) {
  return /*#__PURE__*/React.createElement(PSection, {
    tone: "white",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(PHeader, {
    eyebrow: "Catalogue",
    title: "Pieces we make in this category."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 56
    }
  }, cat.items.map((it, idx) => /*#__PURE__*/React.createElement(PCard, {
    key: it,
    pad: "none",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: `center/cover url(${cat.img})`,
      position: "relative"
    }
  }, idx < 2 ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 12,
      left: 12,
      background: "var(--dillo-red-500)",
      color: "#fff",
      padding: "4px 10px",
      borderRadius: 2,
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "var(--ls-eyebrow)",
      textTransform: "uppercase"
    }
  }, idx === 0 ? "Bestseller" : "New") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: 0
    }
  }, it), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, "From \u20B9", 280 + idx * 45, " / piece \xB7 MOQ 50"))))));
}
function SpecsBand() {
  const specs = [["Fabric", "Cotton, poly-cotton, poly-viscose blends 150–220 GSM"], ["MOQ", "50 pieces (T-shirts) · 100 pieces (uniforms)"], ["Sampling", "5–7 days lead time on stitched samples"], ["Bulk lead", "3–6 weeks depending on customisation"], ["Custom", "Embroidery, screen print, sublimation, woven labels"], ["Care", "100-wash colour-fastness and shrink tested"]];
  return /*#__PURE__*/React.createElement(PSection, {
    tone: "alt",
    pad: "md"
  }, /*#__PURE__*/React.createElement(PHeader, {
    eyebrow: "What you can spec",
    title: "Built around your brief."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24,
      marginTop: 40
    }
  }, specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: 20,
      background: "var(--surface-card)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-lg)",
      borderLeft: "4px solid var(--dillo-red-500)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 700,
      fontSize: 13,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-eyebrow)",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      fontSize: 16,
      color: "var(--text-primary)"
    }
  }, v)))));
}
function ProductsCTA({
  onContact
}) {
  return /*#__PURE__*/React.createElement(PSection, {
    tone: "navy",
    pad: "md",
    bottomRule: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      color: "#fff",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: 36,
      letterSpacing: "-0.02em"
    }
  }, "Like what you see?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "rgba(255,255,255,0.78)"
    }
  }, "Request a stitched sample. We'll ship in 5\u20137 days.")), /*#__PURE__*/React.createElement(PBtn, {
    variant: "primary",
    size: "lg",
    onClick: onContact
  }, "Request a sample")));
}
function ProductsPage({
  onNavigate,
  initial = "healthcare"
}) {
  const [active, setActive] = React.useState(initial);
  const cat = CATEGORIES[active];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CategoryNav, {
    active: active,
    onSelect: setActive
  }), /*#__PURE__*/React.createElement(CategoryHero, {
    cat: cat,
    onQuote: () => onNavigate("contact")
  }), /*#__PURE__*/React.createElement(ItemGrid, {
    cat: cat
  }), /*#__PURE__*/React.createElement(SpecsBand, null), /*#__PURE__*/React.createElement(ProductsCTA, {
    onContact: () => onNavigate("contact")
  }));
}
window.ProductsPage = ProductsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/ProductsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-website/photos.js
try { (() => {
/* Shared image references for the marketing UI kit.
   Using high-quality Unsplash photos (free to use, attributed in README).
   These are URLs only — no asset downloads required. */

const PHOTOS = {
  heroFactory: "https://images.unsplash.com/photo-1581922814484-0b48460b7010?w=1600&q=80",
  // factory floor sewing
  heroDoctor: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1600&q=80",
  // healthcare workers
  healthcare: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=900&q=80",
  // doctor in scrubs
  hospitality: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
  // hotel staff
  educational: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80",
  // schoolchildren
  industrial: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=80",
  // factory workers
  corporate: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80",
  // tshirt
  team: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80",
  // team meeting
  fabric: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1400&q=80",
  // fabric stack
  stitching: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1400&q=80",
  // sewing machine
  warehouse: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=80",
  // warehouse
  portrait1: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
  portrait2: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
  portrait3: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&q=80"
};
window.DILLO_PHOTOS = PHOTOS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-website/photos.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.WhatsAppFab = __ds_scope.WhatsAppFab;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
