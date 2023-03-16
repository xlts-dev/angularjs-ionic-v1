import {expect, test} from '@playwright/test';
import {ChatsPage} from '../pages/chats-page';
import {TabsPage} from '../pages/tabs-page';
import {PageErrorCollector} from '../utils/page-error-collector';

test.describe('chats', () => {
  let pageErrorCollector;

  test.beforeEach(async ({page}) => {
    pageErrorCollector = new PageErrorCollector(page)
    pageErrorCollector.listenForConsoleAndPageErrors(page);

    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
  });

  test.afterEach(async ({ page }) => {
    expect(pageErrorCollector.errorLogs).toStrictEqual([]);
  });

  test('topnav', async ({page}) => {
    const chatsPage = new ChatsPage(page);

    await expect(chatsPage.header).toHaveText('Chats');
  });
})
