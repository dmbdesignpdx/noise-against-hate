// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import NotFound from "@/app/global-not-found";
import { notFound } from "@/content/copy";
import { label } from "@/content/labels";

describe("NotFound", () => {
  test("renders the title and message", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(notFound.title);
    expect(screen.getByText(notFound.message)).toBeInTheDocument();
  });

  test("links back to the home page", () => {
    render(<NotFound />);

    expect(screen.getByRole("link", { name: label.back })).toHaveAttribute("href", "/");
  });
});
