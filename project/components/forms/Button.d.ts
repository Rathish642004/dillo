import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual emphasis. `primary` is the red filled brand button. */
  variant?: "primary" | "secondary" | "ghost" | "navy" | "danger";
  /** Hit-area sizing. Default `md`. */
  size?: "sm" | "md" | "lg";
  /** Optional icon node rendered before the label. Pass a Lucide icon. */
  iconLeft?: React.ReactNode;
  /** Optional icon node rendered after the label. */
  iconRight?: React.ReactNode;
  /** Render as full-width block. */
  block?: boolean;
}
