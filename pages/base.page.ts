import { Page } from '@playwright/test';

export class BasePage {
  constructor(public page: Page) {}

  async navigate(path: string) {
    await this.page.goto(path);
  }

  async click(selector: string) {
    await this.page.click(selector);
  }

  async type(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  async waitFor(selector: string) {
    await this.page.waitForSelector(selector);
  }
}
