import {expect, test} from '@playwright/test';
import {ChatDetailPage} from '../pages/chat-detail-page';
import {ChatsPage} from '../pages/chats-page';
import {TabsPage} from '../pages/tabs-page';
import {ConsoleLogPage} from '../pages/console-log-page';

test.describe('chat detail', () => {
  let consoleLogPage;

  test.beforeEach(async ({page}) => {
    consoleLogPage = new ConsoleLogPage(page)
    consoleLogPage.listenForConsoleAndPageErrors(page);

    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnChatsTab();
    const chatsPage = new ChatsPage(page);
    await chatsPage.clickOnUser();
  });

  test.afterEach(async ({ page }) => {
    expect(consoleLogPage.errorLogs).toStrictEqual([]);
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
    await expect(page.url()).toContain('tab/chats');
  });
})
