export class ChatDetailPage {
  page;
  header;
  image;
  description

  constructor(page) {
    this.page = page;
    this.header = page.locator('ion-nav-bar').getByText('Ben Sparrow');
    this.image = page.getByRole('img').first();
    this.description = page.getByRole('paragraph').first();
  }

  async clickOnBackButton() {
    await this.page.getByRole('button').click();
  }
}
