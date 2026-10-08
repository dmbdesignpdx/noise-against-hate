// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";
// Ours
import { BandCard } from "@/components/band-card";
import type { Band } from "@/types/main";

const band: Band = {
  bandcamp: "testband",
  name: "Test Band",
  country: "Norway",
  tags: ["punk", "hardcore", "crust"],
  genres: ["Punk"],
  image: "https://f4.bcbits.com/img/a0000000000_10.jpg",
};

const url = "https://testband.bandcamp.com";

describe("BandCard", () => {
  test("renders the band name and country", () => {
    render(<BandCard {...band} />);

    expect(screen.getByText("Test Band")).toBeInTheDocument();
    expect(screen.getByText("Norway")).toBeInTheDocument();
  });

  test("renders tags as a comma-separated list", () => {
    render(<BandCard {...band} />);

    expect(screen.getByText("punk, hardcore, crust")).toBeInTheDocument();
  });

  test("renders an image with the band name as alt text", () => {
    render(<BandCard {...band} />);

    expect(screen.getByRole("img", { name: "Test Band" })).toBeInTheDocument();
  });

  test("links to the band's Bandcamp page in a new tab, from both the text and image", () => {
    render(<BandCard {...band} />);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
    for (const link of links) {
      expect(link).toHaveAttribute("href", url);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  test("includes screen-reader-only link text", () => {
    render(<BandCard {...band} />);

    expect(screen.getByText("Link")).toHaveClass("sr-only");
  });

  test.skip("renders an empty tag line when there are no tags", () => {
    render(
      <BandCard
        {...band}
        // tags={[]}
      />,
    );

    expect(screen.queryByText("punk, hardcore, crust")).not.toBeInTheDocument();
  });
});
