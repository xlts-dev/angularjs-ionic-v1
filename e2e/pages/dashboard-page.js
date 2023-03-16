export class DashboardPage {
  page;
  header;

  constructor(page) {
    this.page = page;
    this.header = page.getByText('Dashboard');
  }

  async clickOnIonicMarketLink() {
    await this.page.getByTestId('ionic-market-link').click();
  }

  async clickOnIonicForumLink() {
    await this.page.getByTestId('ionic-forum-link').click();
  }
}
