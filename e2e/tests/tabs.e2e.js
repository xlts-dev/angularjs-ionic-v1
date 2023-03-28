import {expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {test} from '../utils/test-with-error-capturing';

test.describe('tabs', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('');
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
