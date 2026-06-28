import * as React from "react";

export interface WhatsAppFabProps {
  /** Phone number in international format, no spaces. */
  phone?: string;
  /** Optional message to pre-fill. */
  message?: string;
}
