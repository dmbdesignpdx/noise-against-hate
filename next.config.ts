import type { NextConfig } from "next";

import { ORIGIN } from "@/constants";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL(`${ORIGIN.images}/**`), new URL(`${ORIGIN.picsum}/**`)],
  },
  experimental: {
    inlineCss: true,
    agentFeedback: false,
    useTypeScriptCli: true,
    globalNotFound: true,
    turbopackRustReactCompiler: true,
    optimizePackageImports: ["@base-ui/react", "shadcn"],
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
