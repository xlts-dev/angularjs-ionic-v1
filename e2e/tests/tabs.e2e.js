import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';

test.describe('tabs', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('');
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
