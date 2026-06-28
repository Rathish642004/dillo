import * as React from "react";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Required accessible label. */
  "aria-label": string;
  variant?: "primary" | "secondary" | "ghost" | "navy";
  size?: "sm" | "md" | "lg";
}
