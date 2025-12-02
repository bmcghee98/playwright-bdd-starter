import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  emailInput = '#email';
  passwordInput = '#password';
  submitButton = '#submit';

  async login(email: string, password: string) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
  }
}
