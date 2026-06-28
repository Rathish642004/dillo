import React from "react";

export function WhatsAppFab({ phone = "919820212345", message = "Hi Dillo, I'd like a uniform quote." }) {
  const [hover, setHover] = React.useState(false);
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
       aria-label="Chat with us on WhatsApp"
       style={{
         position: "fixed", right: 24, bottom: 24, zIndex: 60,
         display: "inline-flex", alignItems: "center", gap: 10,
         background: "#25D366",
         color: "#fff",
         padding: "12px 18px",
         borderRadius: "var(--radius-pill)",
         boxShadow: hover ? "var(--shadow-xl)" : "var(--shadow-lg)",
         fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14,
         textDecoration: "none",
         transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
         transform: hover ? "translateY(-2px)" : "translateY(0)",
       }}>
      {/* WhatsApp glyph as inline SVG (mark only — official brand asset) */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.7-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3 1 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.7 3.3.6.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3z" />
        <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.6 15.5 2 13.8 2 12 2 6.5 6.5 2 12 2c2.7 0 5.2 1 7.1 2.9C20.9 6.8 22 9.3 22 12c0 5.5-4.5 9.8-10 9.8z" />
      </svg>
      <span>WhatsApp us</span>
    </a>
  );
}
