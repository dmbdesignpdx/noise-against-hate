// Theirs
import { describe, expect, test } from "bun:test";
import { render, screen } from "@testing-library/react";

// Ours
import { Abbreviate } from "@/components/abbreviate";

const data = {
  text: "United States Black Metal",
  using: "USBM",
  prefix: "Learn more about ",
  suffix: " on Wikipedia",
};

describe("Shero", () => {
  test("renders its default content and state", () => {
    render(
      <p>
        <Abbreviate
          text={data.text}
          using={data.using}
        />
      </p>,
    );

    const text = screen.getByText(data.using);

    expect(text).toBeInTheDocument();
    expect(text).toHaveAttribute("title", data.text);
  });

  test("renders with a suffix and prefix", () => {
    render(
      <p>
        <Abbreviate
          text={data.text}
          using={data.using}
          withSuffix={data.suffix}
          withPrefix={data.prefix}
        />
      </p>,
    );

    const prefix = screen.getByText(RegExp(data.prefix));
    const suffix = screen.getByText(RegExp(data.suffix));

    expect(prefix).toBeInTheDocument();
    expect(suffix).toBeInTheDocument();
  });
});
