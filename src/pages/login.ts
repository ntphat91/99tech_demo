import { BasePage } from './base-page';

export class Login extends BasePage {
  private usernameInput = this.page.locator("//input[@name='username']");
  private passwordInput = this.page.locator("//input[@name='password']");
  private loginButton = this.page.locator("//button[contains(@class,'login-button')]");

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
