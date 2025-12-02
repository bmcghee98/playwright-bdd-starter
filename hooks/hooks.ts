import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';

setDefaultTimeout(60 * 1000);

let browser;
let context;
let page;

Before(async () => {
  browser = await chromium.launch();
  context = await browser.newContext();
  page = await context.newPage();

  global.page = page;
});

After(async function (scenario) {
  if (scenario.result?.status === 'failed') {
    await page.screenshot({ path: `./screenshots/${Date.now()}.png` });
  }

  await context.close();
  await browser.close();
});
