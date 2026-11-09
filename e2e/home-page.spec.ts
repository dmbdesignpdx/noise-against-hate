import { expect, test } from "@playwright/test";

test("Home Page has title", async ({ page }) => {
  await page.goto("/");

  const shero = page.getByRole("banner");
  const heading = page.getByRole("heading", { name: /noise against hate/i });
  const link = page.getByRole("link", { name: "View Full List" });

  await expect(shero).toBeVisible();
  await expect(page).toHaveTitle(/noise against hate/i);
  await expect(heading).toBeVisible();
  await expect(link).toBeVisible();

  // await link.click();
});
