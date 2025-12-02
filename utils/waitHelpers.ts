import { Page } from '@playwright/test';

export async function waitForVisible(page: Page, selector: string) {
  await page.waitForSelector(selector, { state: 'visible' });
}

export async function waitForClickable(page: Page, selector: string) {
  await page.waitForSelector(selector, { state: 'attached', timeout: 5000 });
}

export async function waitForUrl(page: Page, pattern: string | RegExp) {
  await page.waitForURL(pattern);
}

export async function waitForText(page: Page, text: string) {
  await page.waitForSelector(`text=${text}`, { state: 'visible' });
}
