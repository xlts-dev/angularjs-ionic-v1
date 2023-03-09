import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {PageErrorCollector} from '../utils/page-error-collector';

test.describe('tabs', () => {
  let pageErrorCollector;

  test.beforeEach(async ({page}) => {
    pageErrorCollector = new PageErrorCollector(page)
    pageErrorCollector.listenForConsoleAndPageErrors(page);

    await page.goto('');
  });

  test.afterEach(async ({ page }) => {
    expect(pageErrorCollector.errorLogs).toStrictEqual([]);
  });

  test('tabs', async ({page}) => {
    const tabsPage = new TabsPage(page);

    await tabsPage.clickOnStatusTab();
    await expect(page.url()).toContain('tab/dash');

    await tabsPage.clickOnChatsTab();
    await expect(page.url()).toContain('tab/chats');

    await tabsPage.clickOnAccountTab();
    await expect(page.url()).toContain('tab/account');
  });
})
