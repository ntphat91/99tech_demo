import { expect } from '@playwright/test';
import { SideMenu } from '@pages/side-menu';

export class EmployeeList extends SideMenu {
  private employeeNameInput = this.page.locator(
    `//div[contains(@class,'oxd-input-group')][.//label[text()='Employee Name']]//input`
  );
  private employeeIdInput = this.page.locator(
    `//div[contains(@class,'oxd-input-group')][.//label[text()='Employee Id']]//input`
  );
  private searchButton = this.page.locator(`//button[normalize-space()='Search']`);
  private loadingIcon = this.page.locator(`//div[@class='oxd-loading-spinner']`);
  private resultRows = this.page.locator(`//div[@class='oxd-table-card']`);

  async searchByName(name: string) {
    await this.employeeNameInput.fill(name);
    await this.searchButton.click();
    await this.waitForLocatorHidden(this.loadingIcon);
  }

  async searchById(id: string) {
    await this.employeeIdInput.fill(id);
    await this.searchButton.click();
    await this.waitForLocatorHidden(this.loadingIcon);
  }

  async verifyResultDisplaysCorrectly(expectedString: string) {
    await this.waitForLocatorVisible(this.resultRows.first());
    let rowElements = await this.resultRows.all();
    for (let row of rowElements) {
      await this.waitForLocatorVisible(row);
      let textContent = await row.textContent();
      expect(textContent.toLowerCase()).toContain(expectedString);
    }
  }
}
