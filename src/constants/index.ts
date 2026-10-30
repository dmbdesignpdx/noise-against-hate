export enum Id {
  TAGS = "tags-input",
  SEARCH = "search-form",
  ABOUT = "about-title",
}

export enum Origin {
  DEV = "http://localhost:3000",
  SITE = "https://noise-against-hate.netlify.app",
  AUTHOR = "https://danielblake.dev",
  IMAGES = "https://f4.bcbits.com",
  PICSUM = "https://picsum.photos",
}

export const Path = {
  HOME: new URL(Origin.SITE),
  BANDS: new URL("bands", Origin.SITE),
} as const;

export const PAGE_SIZE = 12;
export const GITHUB = "https://github.com/dmbdesignpdx/noise-against-hate";
export const PLACEHOLDER = "https://picsum.photos/id/229/768";
