import * as React from "react";

export interface TestimonialCardProps {
  /** The quote, without surrounding curly quotes — the component adds them. */
  quote: string;
  /** Name of the person quoted. */
  author: string;
  /** Role / company shown beneath the name. */
  role: string;
  /** Optional avatar image URL. */
  avatarSrc?: string;
}
