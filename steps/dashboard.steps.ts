import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world';
import { expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard.page';

When('I open the dashboard', async function (this: CustomWorld) {
  const dashboard = new DashboardPage(this.page);
  await dashboard.goto();
});

Then('I see the welcome message', async function (this: CustomWorld) {
  const dashboard = new DashboardPage(this.page);
  await expect(dashboard.header).toContainText('Dashboard');
});

Then('I see the new record', async function (this: CustomWorld) {
  if (!this.record) throw new Error(`this.record is undefined`);
  if (!this.record.id) throw new Error(`Record missing ID`);

  const selector = `[data-id="${this.record.id}"]`;
  const element = this.page.locator(selector);

  await element.waitFor({ state: 'visible' });
});
