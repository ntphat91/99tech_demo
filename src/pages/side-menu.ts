import { BasePage } from '@pages/base-page';
import { expect } from '@playwright/test';

export class SideMenu extends BasePage {
  private sideMenu = this.page.locator(`//aside[@class='oxd-sidepanel']`);
  private pimMenu = this.page.locator(`//a[contains(@href,'viewPimModule')]`);

  async verifySideMenuDislays() {
    await this.waitForLocatorVisible(this.sideMenu);
    await expect(this.sideMenu).toBeVisible();
  }

  async gotoPIMPage() {
    await this.pimMenu.click();
  }
}
