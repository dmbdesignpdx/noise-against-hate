import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

import { Callout } from "@/components/callout";

const text = /Callout Component/i;

describe("Callout", () => {
  test("renders its default content and state", async () => {
    render(<Callout />);

    const component = await screen.findByText(text);

    expect(component).toBeInTheDocument();
  });
});
