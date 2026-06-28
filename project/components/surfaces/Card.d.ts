import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Padding scale inside the card. */
  pad?: "sm" | "md" | "lg" | "none";
  /** Card surface emphasis. */
  variant?: "default" | "raised" | "outline" | "navy";
  /** Lift card on hover (cursor changes, shadow grows, red rule appears). */
  interactive?: boolean;
}
