import * as React from "react";

export interface StatCardProps {
  /** Large numeric value, e.g. "2.4M" or "20+". */
  value: string;
  /** Caption beneath the value, e.g. "Uniforms delivered". */
  label: string;
  /** Optional icon node. */
  icon?: React.ReactNode;
  /** Use the dark navy band variant. Default false. */
  onDark?: boolean;
}
