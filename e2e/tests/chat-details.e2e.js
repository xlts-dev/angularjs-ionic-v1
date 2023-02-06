import {test, expect} from '@playwright/test';
import {ChatDetailPage} from '../pages/chat-detail-page';
import {TabsPage} from '../pages/tabs-page';
import {ChatsPage} from '../pages/chats-page';

test.describe('chat detail', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8100');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
    const chatsPage = new ChatsPage(page);
    await chatsPage.clickOnUser();
  });

  test('details', async ({page}) => {
    const chatDetail = new ChatDetailPage(page);

    await expect(chatDetail.header).toHaveText('Ben Sparrow');
    await expect(chatDetail.image).toHaveAttribute('src', 'img/ben.png');
    await expect(chatDetail.description).toHaveText('You on your way?');
  });

  test('back to chats', async ({page}) => {
    const chatDetail = new ChatDetailPage(page);

    await chatDetail.clickOnBackButton();
    await page.waitForTimeout(1000);
    await expect(page.url()).toContain('tab/chats');
  });
})
