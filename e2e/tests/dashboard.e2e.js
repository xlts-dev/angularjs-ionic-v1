import {expect, test} from '@playwright/test';
import {DashboardPage} from '../pages/dashboard-page';
import {TabsPage} from '../pages/tabs-page';
import {ConsoleLogPage} from '../pages/console-log-page';

test.describe('dashboard', () => {
  let consoleLogPage;

  test.beforeEach(async ({page}) => {
    consoleLogPage = new ConsoleLogPage(page)
    consoleLogPage.listenForConsoleAndPageErrors(page);

    await page.goto('');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnStatusTab();
  });

  test.afterEach(async ({ page }) => {
    expect(consoleLogPage.errorLogs).toStrictEqual([]);
  });

  test('topnav', async ({page}) => {
    const dashboardPage = new DashboardPage(page);

    await expect(dashboardPage.header).toHaveText('Dashboard');
  });

  test('Redirect to Ionic Market page', async ({page}) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.clickOnIonicMarketLink();

    const ionicMarketPage = await page.waitForEvent('popup');
    await expect(ionicMarketPage.url()).toContain('market.ionicframework.com/starters');
  });

  test('Redirect to Ionic Forum page', async ({page}) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.clickOnIonicForumLink();

    const ionicForumPage = await page.waitForEvent('popup');
    await expect(ionicForumPage.url()).toContain('forum.ionicframework.com/');
  });
})
