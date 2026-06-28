import * as React from "react";

export interface FooterProps {
  /** Click handler for nav links inside the footer. */
  onNavigate?: (key: string) => void;
}
