import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.only('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  let el = page.getByRole('link', { name: 'Installing Playwright', exact: true })
  await expect(el).toBeVisible();await page.getByRole('link', { name: 'Opening the trace', exact: true }).click();
  await page.getByText('In the HTML report click on').click();
  await expect(page.getByText('In the HTML report click on')).toBeVisible();
});
