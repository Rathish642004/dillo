import * as React from "react";

export interface NavBarProps {
  /** Currently-active page key. */
  active?: "home" | "about" | "products" | "portfolio" | "contact";
  /** Called when a nav link is clicked. */
  onNavigate?: (key: "home" | "about" | "products" | "portfolio" | "contact") => void;
  /** Click handler for the primary CTA. */
  onCta?: () => void;
}
