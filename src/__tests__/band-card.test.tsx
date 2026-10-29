// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { BandCard } from "@/components/band-card";
import type { SearchedBand } from "@/types/main";
import { bandcampUrl } from "@/utils/bandcamp";

const band: SearchedBand = {
  bandcamp: "blackbraid",
  name: "Test Band",
  country: "Norway",
  genres: ["Punk", "Hardcore"],
  image: "https://picsum.photos/200",
  id: 1,
};

const bandcampLink = /bandcamp link/i;

describe("BandCard", () => {
  test("renders its default content and state", () => {
    render(<BandCard {...band} />);

    const root = screen.getByRole("article", { name: band.name });
    const heading = screen.getByRole("heading", { name: band.name });
    const country = screen.getByText(band.country);
    const genres = screen.getByText("Punk / Hardcore");
    const link = screen.getByRole("link", { name: bandcampLink });

    expect(root).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(country).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(link).toBeInTheDocument();
  });

  test("links to the band's Bandcamp page in a new tab", () => {
    render(<BandCard {...band} />);

    const link = screen.getByRole("link", { name: bandcampLink });

    expect(link).toHaveAttribute("href", bandcampUrl(band.bandcamp));
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
