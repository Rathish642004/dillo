import * as React from "react";

export interface ProcessStepProps {
  /** Two-digit numeral, e.g. "01". */
  number: string;
  /** Step title. */
  title: string;
  /** Step description. */
  description: string;
  /** Optional icon (Lucide). */
  icon?: React.ReactNode;
}
