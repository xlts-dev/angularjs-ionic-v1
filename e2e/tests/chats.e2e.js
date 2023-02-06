import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {ChatsPage} from '../pages/chats-page';

test.describe('chats', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8100/');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
  });

  test('topnav', async ({page}) => {
    const chatsPage = new ChatsPage(page);

    await expect(chatsPage.header).toHaveText('Chats');
  });
})
