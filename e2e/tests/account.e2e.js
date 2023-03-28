import {expect} from '@playwright/test';
import {AccountPage} from '../pages/account-page';
import {TabsPage} from '../pages/tabs-page';
import {test} from '../utils/test-with-error-capturing';

test.describe('account', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnAccountTab();
  });

  test('TopNav', async ({page}) => {
    const accountPage = new AccountPage(page);

    await expect(accountPage.header).toHaveText('Account');
  });

  test('Enable Friends checkbox', async ({page}) => {
    const accountPage = new AccountPage(page);
    accountPage.enableFriends.check();
    await expect(accountPage.enableFriends.isChecked()).toBeTruthy();

    await accountPage.enableFriends.click();
    await expect(accountPage.enableFriends).toHaveAttribute('aria-checked', 'false');

    await accountPage.enableFriends.click();
    await expect(accountPage.enableFriends).toHaveAttribute('aria-checked', 'true');
  });
})
