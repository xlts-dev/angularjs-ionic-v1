import {expect, test} from '@playwright/test';
import {AccountPage} from '../pages/account-page';
import {TabsPage} from '../pages/tabs-page';
import {ConsoleLogPage} from '../pages/console-log-page';

test.describe('account', () => {
  let consoleLogPage;

  test.beforeEach(async ({page}) => {
    consoleLogPage = new ConsoleLogPage(page)
    consoleLogPage.listenForConsoleAndPageErrors(page);

    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnAccountTab();
  });

  test.afterEach(async ({ page }) => {
    expect(consoleLogPage.errorLogs).toStrictEqual([]);
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
