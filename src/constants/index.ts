export const ID = {
  tags: "tags-input",
  search: "search-form",
  about: "about-title",
} as const;

export const ORIGIN = {
  dev: "http://localhost:3000",
  site: "https://noiseagainsthate.com",
  author: "https://danielblake.dev",
  images: "https://f4.bcbits.com",
  picsum: "https://picsum.photos",
} as const;

export const PATH = {
  home: new URL(ORIGIN.site),
  bands: new URL("bands", ORIGIN.site),
} as const;

export const PAGE_SIZE = 12;
export const GITHUB = "https://github.com/dmbdesignpdx/noise-against-hate";
export const PLACEHOLDER = "https://picsum.photos/id/229/768";
export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
