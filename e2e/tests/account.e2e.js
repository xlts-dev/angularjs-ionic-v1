import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {DashboardPage} from '../pages/dashboard-page';
import {AccountPage} from '../pages/account-page';

test.describe('account', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8100/');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnAccountTab();
  });

  test('topnav', async ({page}) => {
    const accountPage = new AccountPage(page);

    await expect(accountPage.header).toHaveText('Account');
  });

  test('Enable Friends checkbox', async ({page}) => {
    const accountPage = new AccountPage(page);
    accountPage.enableFriends.check();
    await expect(accountPage.enableFriends.isChecked()).toBeTruthy();

    await accountPage.clickOnEnableFriendsCheckbox();
    await expect(accountPage.enableFriends).toHaveAttribute('aria-checked', 'false');

    await accountPage.clickOnEnableFriendsCheckbox();
    await expect(accountPage.enableFriends).toHaveAttribute('aria-checked', 'true');
  });
})




