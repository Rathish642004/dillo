import * as React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Label rendered above the input. */
  label?: string;
  /** Helper text rendered below. */
  hint?: string;
  /** Error message — when set, the field renders in error state. */
  error?: string;
  /** Optional icon rendered inside, left side. */
  iconLeft?: React.ReactNode;
}
