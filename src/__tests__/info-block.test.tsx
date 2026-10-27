// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { InfoBlock } from "@/components/info-block";
import { info } from "@/content/copy";

const bands = [{ name: "One" }, { name: "Two" }];

describe("InfoBlock", () => {
  test("renders its default content and state", () => {
    render(<InfoBlock />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  test("shows the loading message while loading", () => {
    render(<InfoBlock loading />);

    expect(screen.getByRole("status")).toHaveTextContent(info.loading);
  });

  test("shows the error message as an alert", () => {
    render(<InfoBlock error />);

    expect(screen.getByRole("alert")).toHaveTextContent(info.error);
  });

  test("shows the not found message when there are no bands", () => {
    render(<InfoBlock bands={[]} />);

    expect(screen.getByRole("status")).toHaveTextContent(info.notFound);
  });

  test("shows the band count and tags when bands are found", () => {
    render(
      <InfoBlock
        bands={bands}
        tags="punk"
      />,
    );

    expect(screen.getByRole("status")).toHaveTextContent(info.bandsFound(bands.length, "punk"));
  });

  test("falls back to empty tags when none are given", () => {
    render(<InfoBlock bands={bands} />);

    expect(screen.getByRole("status")).toHaveTextContent(info.bandsFound(bands.length, ""));
  });

  test("hides the band count while loading", () => {
    render(
      <InfoBlock
        loading
        bands={bands}
        tags="punk"
      />,
    );

    expect(screen.getAllByRole("status")).toHaveLength(1);
    expect(screen.getByRole("status")).toHaveTextContent(info.loading);
  });

  test("renders nothing for null bands", () => {
    render(<InfoBlock bands={null} />);

    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
