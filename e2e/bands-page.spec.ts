import { expect, test } from "@playwright/test";

test("Navigate from Home to Bands Page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "View Full List" }).click();
  await expect(page.getByRole("heading", { name: "Full List (So Far)" })).toBeVisible();
});
