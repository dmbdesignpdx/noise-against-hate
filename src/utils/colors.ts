import { colordx } from "@colordx/core";
import colors from "tailwindcss/colors";

type Tokens = "primary" | "secondary" | "accent" | "background";

/**
 * @see src/app/globals.css
 */
const color: Record<Tokens, string> = {
  primary: colors.purple[600],
  secondary: colors.zinc[100],
  accent: colors.sky[600],
  background: colors.neutral[950],
};

export function getHexColor(token: Tokens) {
  return colordx(color[token]).toHex();
}
