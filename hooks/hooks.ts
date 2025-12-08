import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page, BrowserContextOptions } from '@playwright/test';
import { CustomWorld } from '../world';
import { LoginPage } from '../pages/login.page';
import fs from 'fs';
import path from 'path';

setDefaultTimeout(60 * 1000);

let browser: Browser;
const STORAGE_STATE_PATH = path.join(__dirname, '..', 'storageState.json');

Before(async function (this: CustomWorld) {
  // Launch browser if first scenario
  if (!browser) {
    browser = await chromium.launch();
  }

  const contextOptions: BrowserContextOptions = {};

  // Reuse state if exists
  if (fs.existsSync(STORAGE_STATE_PATH)) {
    contextOptions.storageState = STORAGE_STATE_PATH;
  }

  const context: BrowserContext = await browser.newContext(contextOptions);
  const page: Page = await context.newPage();
  this.page = page;

  // Start tracing AFTER page exists
  await context.tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true,
  });

  // Perform login if first time running framework
  if (!fs.existsSync(STORAGE_STATE_PATH)) {
    await page.goto('http://localhost:3001/login.html');

    const loginPage = new LoginPage(page);
    await loginPage.login('test@example.com', 'password123');
    await loginPage.click(loginPage.submitButton);

    await page.waitForURL('**/dashboard.html');

    await context.storageState({ path: STORAGE_STATE_PATH });
  }
});

After(async function (this: CustomWorld, scenario) {
  const context = this.page.context();

  if (scenario.result?.status === Status.FAILED) {
    const tracePath = `traces/${Date.now()}-trace.zip`;
    await context.tracing.stop({ path: tracePath });

    await this.page.screenshot({
      path: `screenshots/${Date.now()}.png`,
    });
  } else {
    await context.tracing.stop();
  }

  await context.close();
});
