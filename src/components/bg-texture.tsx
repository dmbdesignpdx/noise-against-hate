"use client";

import { GradFlow } from "gradflow";

import { useMotionPreference } from "@/hooks/use-reduced-motion";
import { getHexColor } from "@/utils/colors";

export function BgTexture() {
  const prefersNoMotion = useMotionPreference();

  return (
    <div className="absolute inset-0 block-[60svh] opacity-90 -z-1 pointer-events-none">
      <GradFlow
        className="mask-[linear-gradient(to_bottom,transparent,black_40%)] scale-[-1]"
        paused={prefersNoMotion}
        config={{
          type: "horizon",
          color1: getHexColor("primary"),
          color2: getHexColor("background"),
          color3: getHexColor("accent"),
          speed: 1.5,
          scale: 1.2,
          noise: 1,
        }}
      />
    </div>
  );
}
