import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, Page, Browser, BrowserContext, BrowserContextOptions } from '@playwright/test';
import { CustomWorld } from '../world';
import { LoginPage } from '../pages/login.page';
import fs from 'fs';
import path from 'path';

setDefaultTimeout(60 * 1000);

let browser: Browser;
const STORAGE_STATE_PATH = path.join(__dirname, '..', 'storageState.json');

Before(async function (this: CustomWorld) {
  await this.page.context().tracing.start({
    screenshots: true,
    snapshots: true,
    sources: true,
  });

  // 1) Launch the browser once and reuse it
  if (!browser) {
    browser = await chromium.launch();
  }

  const contextOptions: BrowserContextOptions = {};

  // 2) If we already have an auth state saved, reuse it
  if (fs.existsSync(STORAGE_STATE_PATH)) {
    contextOptions.storageState = STORAGE_STATE_PATH;
  }

  const context: BrowserContext = await browser.newContext(contextOptions);
  const page: Page = await context.newPage();
  this.page = page;

  // 3) If no auth state yet, perform login once and save it
  if (!fs.existsSync(STORAGE_STATE_PATH)) {
    await page.goto('http://localhost:3001/login.html');

    const loginPage = new LoginPage(page);
    await loginPage.login('test@example.com', 'password123');
    await loginPage.click(loginPage.submitButton);

    await page.waitForURL('**/dashboard.html');

    // Save authenticated cookies/localStorage/etc. to a file
    await context.storageState({ path: STORAGE_STATE_PATH });
  }
});

After(async function (this: CustomWorld, scenario) {
  After(async function (this: CustomWorld, scenario) {
    const context = this.page.context();

    if (scenario.result?.status === Status.FAILED) {
      // Save trace
      const tracePath = `traces/${Date.now()}-trace.zip`;
      await context.tracing.stop({ path: tracePath });

      // Save screenshot
      await this.page.screenshot({ path: `screenshots/${Date.now()}.png` });
    } else {
      // Stop tracing without saving
      await context.tracing.stop();
    }

    await context.close();
  });
});

// (Optional) you can add an AfterAll later to close browser when Cucumber finishes
