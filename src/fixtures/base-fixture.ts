import { test as base } from '@playwright/test';
import { PageManager } from '../pages/page-manager';

type TestFixture = {
  pageManager: PageManager;
};

const test = base.extend<TestFixture>({
  pageManager: async ({ page }, use) => {
    let pageManager = new PageManager(page);
    await use(pageManager);
  },
});

export default test;
