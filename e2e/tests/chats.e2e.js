import {expect, test} from '@playwright/test';
import {ChatsPage} from '../pages/chats-page';
import {TabsPage} from '../pages/tabs-page';
import {ConsoleLogPage} from '../pages/console-log-page';

test.describe('chats', () => {
  let consoleLogPage;

  test.beforeEach(async ({page}) => {
    consoleLogPage = new ConsoleLogPage(page)
    consoleLogPage.listenForConsoleAndPageErrors(page);

    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
  });

  test.afterEach(async ({ page }) => {
    expect(consoleLogPage.errorLogs).toStrictEqual([]);
  });

  test('topnav', async ({page}) => {
    const chatsPage = new ChatsPage(page);

    await expect(chatsPage.header).toHaveText('Chats');
  });
})
