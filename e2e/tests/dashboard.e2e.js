import {test, expect} from '@playwright/test';
import {TabsPage} from '../pages/tabs-page';
import {DashboardPage} from '../pages/dashboard-page';

test.describe('dashboard', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:8100/');
    const tabsPage = new TabsPage(page);
    await tabsPage.clickOnStatusTab();
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




