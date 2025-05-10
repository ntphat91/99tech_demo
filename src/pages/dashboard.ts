import { BasePage } from './base-page';

export class DashBoard extends BasePage {
  private sideMenu = this.page.locator(`//aside[@class='oxd-sidepanel']`);

  async waitForSideMenu() {
    await this.waitForLocatorVisible(this.sideMenu);
  }
}
