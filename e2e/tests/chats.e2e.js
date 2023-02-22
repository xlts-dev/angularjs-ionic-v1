import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {ChatsPage} from '../pages/chats-page';

test.describe('chats', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
  });

  test.afterEach(async ({ page }) => {
    const errorLogs = [];
    page.on('console', message => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
      }
    });
    expect(errorLogs).toStrictEqual([]);
  });

  test('topnav', async ({page}) => {
    const chatsPage = new ChatsPage(page);

    await expect(chatsPage.header).toHaveText('Chats');
  });
})
