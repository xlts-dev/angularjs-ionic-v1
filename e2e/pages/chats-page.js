export class ChatsPage {
  page;
  header;
  links;

  constructor(page) {
    this.page = page;
    this.header = page.locator('ion-nav-bar').getByText('Chats');
    this.links = page.getByRole('link')
  }

  async clickOnUser() {
    await this.page.getByRole('link').first().click();
  }
}
