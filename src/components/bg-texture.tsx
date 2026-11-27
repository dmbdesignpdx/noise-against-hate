"use client";

import { Aurora, CRTScreen, Shader, VHS } from "shaders/react";

import { useMotionPreference } from "@/hooks/use-reduced-motion";
import { getHexColor } from "@/utils/colors";

export function BgTexture() {
  const prefersNoMotion = useMotionPreference();

  return (
    <div className="contain-paint absolute isolate overflow-hidden inset-0 block-svb opacity-90 -z-1 pointer-events-none mask-[linear-gradient(to_top,transparent,black_40%)]">
      {!prefersNoMotion && (
        <Shader
          colorSpace="srgb"
          className="inline-full block-full"
        >
          <Aurora
            colorA={getHexColor("indigo")}
            colorB={getHexColor("purple", 600)}
            colorC={getHexColor("sky", 600)}
            colorSpace="oklab"
            height={100}
          />
          <CRTScreen
            colorShift={1.5}
            vignetteRadius={0.25}
          />
          <VHS />
        </Shader>
      )}
    </div>
  );
}
