import * as React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background treatment. */
  tone?: "white" | "alt" | "navy" | "red";
  /** Vertical padding scale. Default `lg`. */
  pad?: "md" | "lg";
  /** Show the signature full-width red rule at the bottom edge. */
  bottomRule?: boolean;
}
