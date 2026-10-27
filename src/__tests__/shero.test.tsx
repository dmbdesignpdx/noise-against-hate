// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { Shero } from "@/components/shero";
import { metaData } from "@/content/meta";

describe("Shero", () => {
  test("renders its default content and state", () => {
    render(<Shero />);

    const title = screen.getByText(metaData.title);
    const desc = screen.getByText(metaData.description);

    expect(title).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
  });
});
