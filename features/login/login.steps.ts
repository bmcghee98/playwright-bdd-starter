import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/login.page';
import { testData } from '../../utils/testData';

let loginPage;

Given('I navigate to the login page', async function () {
  loginPage = new LoginPage(global.page);
  await global.page.goto(process.env.BASE_URL + '/login');
});

When('I enter valid login details', async function () {
  const { email, password } = testData.validUser;
  await loginPage.login(email, password);
});

When('I submit the form', async function () {
  await loginPage.click(loginPage.submitButton);
});

Then('I should see my dashboard', async function () {
  await global.page.waitForURL('**/dashboard');
});
