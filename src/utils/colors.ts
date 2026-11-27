import { colordx } from "@colordx/core";
import colors from "tailwindcss/colors";

type Color = keyof Omit<typeof colors, "inherit" | "current" | "transparent" | "black" | "white">;
type Shade = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export function getHexColor(color: Color, shade?: Shade) {
  return colordx(colors[color][shade || 500]).toHex();
}
