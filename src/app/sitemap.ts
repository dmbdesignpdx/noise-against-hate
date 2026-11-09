import type { MetadataRoute } from "next";

import { PATH } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PATH.home.href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: PATH.bands.href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
