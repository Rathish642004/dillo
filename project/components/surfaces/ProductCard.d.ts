import * as React from "react";

export interface ProductCardProps {
  /** Category name, e.g. "Healthcare uniforms". */
  title: string;
  /** Short blurb under the title. */
  description: string;
  /** Image URL — full-bleed top of card. */
  imageSrc?: string;
  /** Optional list of bullet items (key products). */
  items?: string[];
  /** CTA label. Default "Explore". */
  ctaLabel?: string;
  onCta?: () => void;
}
