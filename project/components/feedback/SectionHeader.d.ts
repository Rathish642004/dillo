import * as React from "react";

export interface SectionHeaderProps {
  /** Small uppercase eyebrow above the title. */
  eyebrow?: string;
  /** Section title. */
  title: string;
  /** Optional supporting paragraph. */
  description?: string;
  /** Render aligned to centre. Default left. */
  align?: "left" | "center";
  /** Use light text — for navy bands. */
  onDark?: boolean;
}
