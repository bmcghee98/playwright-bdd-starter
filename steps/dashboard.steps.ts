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
