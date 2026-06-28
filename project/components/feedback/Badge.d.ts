import * as React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  /** Visual emphasis. */
  variant?: "red" | "navy" | "neutral" | "success" | "warning";
  /** Render as the signature red banner (uppercase, square). */
  banner?: boolean;
}
