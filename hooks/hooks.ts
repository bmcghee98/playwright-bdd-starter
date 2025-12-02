import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext } from '@playwright/test';
import { CustomWorld } from '../world';

setDefaultTimeout(60 * 1000);

let browser: Browser;

Before(async function (this: CustomWorld) {
  browser = await chromium.launch();
  const context: BrowserContext = await browser.newContext();
  const page: Page = await context.newPage();
  this.page = page;
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    await this.page.screenshot({ path: `screenshots/${Date.now()}.png` });
  }

  await this.page.context().close();
  await browser.close();
});
