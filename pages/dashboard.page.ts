import { Page } from '@playwright/test';

export class DashboardPage {
  constructor(private page: Page) {}

  get header() {
    return this.page.locator('h1');
  }

  async goto() {
    await this.page.goto('http://localhost:3001/dashboard.html');
  }
}
