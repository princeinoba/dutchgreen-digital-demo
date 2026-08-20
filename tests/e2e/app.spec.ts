import { expect, test } from "@playwright/test";

test("public visitor can discover services, FAQ and estimate access", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Outdoor spaces/ })).toBeVisible();
  if ((page.viewportSize()?.width ?? 1440) < 900) {
    await page.locator('summary[aria-label="Open navigation"]').click();
  }
  await expect(page.getByRole("link", { name: "FAQ", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Portfolio demo", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "Start your estimate" }).click();
  await expect(page.getByRole("heading", { name: "Project basics" })).toBeVisible();
});

test("Directors AI workspace remains gated and can be entered explicitly", async ({ page }) => {
  await page.goto("/directors-ai-workspace");
  await expect(page).toHaveURL(/\/sign-in/);
  await expect(page.getByRole("heading", { name: "Authentication design" })).toBeVisible();
  await page.getByRole("button", { name: "Open portfolio demo" }).click();
  await expect(page).toHaveURL(/\/directors-ai-workspace$/);
  await expect(page.getByText("Estimate pipeline")).toBeVisible();
});

test("forgot-password presents the honest demo recovery state", async ({ page }) => {
  await page.goto("/forgot-password");
  await expect(page.getByRole("heading", { name: "Reset your password." })).toBeVisible();
  await expect(page.getByText("No recovery email is sent in demo mode.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Return to sign in" })).toBeVisible();
});

test("all requested Director workspace pages render after demo sign-in", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/sign-in");
  await page.getByRole("button", { name: "Open portfolio demo" }).click();
  await expect(page.getByText("Estimate pipeline")).toBeVisible();

  const routes = [
    "/directors-ai-workspace",
    "/directors-ai-workspace/leads",
    "/directors-ai-workspace/leads/DG-1048",
    "/directors-ai-workspace/schedule",
    "/directors-ai-workspace/jobs",
    "/directors-ai-workspace/jobs/DG-JOB-205",
    "/directors-ai-workspace/customers",
    "/directors-ai-workspace/customers/cus_mia",
    "/directors-ai-workspace/crew",
    "/directors-ai-workspace/services",
    "/directors-ai-workspace/materials",
    "/directors-ai-workspace/invoices",
    "/directors-ai-workspace/invoices/INV-0108",
    "/directors-ai-workspace/ai",
    "/directors-ai-workspace/settings",
  ] as const;

  for (const route of routes) {
    await page.goto(route);
    expect(new URL(page.url()).pathname).toBe(route);
    await expect(page.locator("main#main-content")).toBeVisible();
    await expect(page.locator(".portal-disclaimer")).toContainText("Synthetic data");
  }
});