export async function waitForVisible(page, selector) {
  await page.waitForSelector(selector, { state: 'visible' });
}
