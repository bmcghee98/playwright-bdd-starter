import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../world';

Given('I am logged in', async function (this: CustomWorld) {
  await this.page.goto('http://localhost:3001/dashboard.html');

  await this.page.waitForSelector('h1'); // dashboard header
});
