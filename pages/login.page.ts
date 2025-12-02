import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  emailField = '#email';
  passwordField = '#password';
  submitButton = '#submit';

  async login(email: string, password: string) {
    await this.type(this.emailField, email);
    await this.type(this.passwordField, password);
    await this.click(this.submitButton);
  }
}
