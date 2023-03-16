export class TabsPage {
  page;

  constructor(page) {
    this.page = page;
  }

  async clickOnStatusTab() {
    await this.page.locator('a').filter({hasText: 'Status'}).click();
  }

  async clickOnChatsTab() {
    await this.page.locator('a').filter({hasText: 'Chats'}).click();
  }

  async clickOnAccountTab() {
    await this.page.locator('a').filter({hasText: 'Account'}).click();
  }
}
