// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { Shero } from "@/components/shero";
import { label } from "@/content/labels";
import { metaData } from "@/content/meta";

describe("Shero", () => {
  test("renders its default content and state", async () => {
    render(<Shero />);

    await screen.findByText(metaData.title);
    await screen.findByText(metaData.description);
    const cta = await screen.findByText(label.explore);

    expect(cta).not.toBeDisabled();
  });
});
