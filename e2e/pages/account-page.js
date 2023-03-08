export class AccountPage {
  page;
  header;
  enableFriends;

  constructor(page) {
    this.page = page;
    this.header = page.locator('ion-nav-bar').getByText('Account');
    this.enableFriends = page.getByRole('checkbox');
  }
}
