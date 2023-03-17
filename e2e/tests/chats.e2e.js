import {expect} from '@playwright/test';
import {ChatsPage} from '../pages/chats-page';
import {TabsPage} from '../pages/tabs-page';
import {test} from '../utils/test-reporter';

test.describe('chats', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
  });

  test('topnav', async ({page}) => {
    const chatsPage = new ChatsPage(page);

    await expect(chatsPage.header).toHaveText('Chats');
  });
})
