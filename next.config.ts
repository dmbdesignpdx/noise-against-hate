import type { NextConfig } from "next";

import { Origin } from "@/constants";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL(`${Origin.IMAGES}/**`), new URL(`${Origin.PICSUM}/**`)],
  },
  experimental: {
    inlineCss: true,
    agentFeedback: false,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  typedRoutes: true,
  trailingSlash: false,
  turbopack: {
    root: process.cwd(),
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
