import { Locator, Page } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForLocatorVisible(locator: Locator) {
    await locator.waitFor({ state: 'visible' });
  }

  async waitForLocatorHidden(locator: Locator) {
    await locator.waitFor({ state: 'hidden' });
  }
}
