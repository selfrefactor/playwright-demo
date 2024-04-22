import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.getByText('Click the "pick locator"').click();
  await el =  page.getByRole('complementary')
});