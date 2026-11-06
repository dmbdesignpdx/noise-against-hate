import { useSyncExternalStore } from "react";

import { REDUCED_MOTION } from "@/constants";

function subscribe(callback: () => void) {
  const media = window.matchMedia(REDUCED_MOTION);

  media.addEventListener("change", callback);

  return () => media.removeEventListener("change", callback);
}

export function useMotionPreference(): boolean {
  const prefersReducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  return prefersReducedMotion;
}
