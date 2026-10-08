import type { MetadataRoute } from "next";

import { Path } from "@/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: Path.HOME.href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: Path.BANDS.href,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
