import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/login.page';
import { CustomWorld } from '../../world';

let loginPage: LoginPage;

Given('I navigate to the login page', async function (this: CustomWorld) {
  await this.page.goto('http://localhost:3001/login.html');
  console.log("Current URL:", this.page.url());
  console.log(await this.page.content());
  loginPage = new LoginPage(this.page);
});

When('I enter valid login details', async function (this: CustomWorld) {
  await loginPage.login('test@example.com', 'password123');
});

When('I submit the form', async function (this: CustomWorld) {
  await loginPage.click(loginPage.submitButton);
});

Then('I should see my dashboard', async function (this: CustomWorld) {
  await this.page.waitForURL('**/dashboard.html');
});
