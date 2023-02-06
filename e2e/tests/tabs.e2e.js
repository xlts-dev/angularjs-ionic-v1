import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';

test.describe('tabs', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8100/');
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
