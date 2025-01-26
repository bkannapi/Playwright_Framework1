import { Page } from '@playwright/test';

export async function moveToElement(page: Page, selector: string) {
  const element = await page.locator(selector);
  await element.waitFor({ state: 'visible' });
  await element.scrollIntoViewIfNeeded();
  await element.hover();
}
