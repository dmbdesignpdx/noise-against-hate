// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { TextLink } from "@/components/text-link";

describe("TextLink", () => {
  test("renders its default content and state", () => {
    render(<TextLink href="https://example.com">Example</TextLink>);

    const link = screen.getByRole("link", { name: "Example" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  test("opens in a new tab without leaking the opener", () => {
    render(<TextLink href="https://example.com">Example</TextLink>);

    const link = screen.getByRole("link", { name: "Example" });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
