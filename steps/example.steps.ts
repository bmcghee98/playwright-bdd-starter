import { Given } from '@cucumber/cucumber';

Given('I open the starter app', async function () {
  await this.page.goto('http://localhost:3001');
});

