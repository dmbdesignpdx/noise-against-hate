export interface Band {
  bandcamp: string; // Key
  name: string;
  country: string;
  tags: string[];
  image: string;
  genres: string[];
}

export type SearchedBand = Omit<Band, "tags">;

export type ListedBand = Omit<Band, "image" | "country" | "tags">;
