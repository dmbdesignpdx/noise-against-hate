export interface Band {
  id: number; // Key
  bandcamp: string;
  name: string;
  country: string;
  tags: string[];
  image: string;
  genres: string[];
}

export type SearchedBand = Omit<Band, "tags">;

export type ListedBand = Omit<Band, "image" | "country" | "tags">;
