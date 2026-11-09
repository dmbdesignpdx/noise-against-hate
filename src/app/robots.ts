import type { MetadataRoute } from "next";

import { PATH } from "@/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "",
    },
    sitemap: `${PATH.home.origin}/sitemap.xml`,
  };
}
