import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {ConsoleLogPage} from '../pages/console-log-page';

test.describe('tabs', () => {
  let consoleLogPage;

  test.beforeEach(async ({page}) => {
    consoleLogPage = new ConsoleLogPage(page)
    consoleLogPage.listenForConsoleAndPageErrors(page);

    await page.goto('');
  });

  test.afterEach(async ({ page }) => {
    expect(consoleLogPage.errorLogs).toStrictEqual([]);
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
