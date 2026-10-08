export enum Id {
  TAGS = "tags-input",
  SEARCH = "search-form",
  ABOUT = "about-title",
}

export enum Origin {
  DEV = "http://localhost:3000",
  SITE = "https://noise-against-hate.netlify.app",
  AUTHOR = "https://danielblake.dev",
}

export const Path = {
  HOME: new URL(Origin.SITE),
  BANDS: new URL("bands", Origin.SITE),
} as const;

export const PAGE_SIZE = 12;
