export class ConsoleLogPage {
  page;
  errorLogs;

  constructor(page) {
    this.page = page;
  }

  listenForConsoleAndPageErrors(page) {
    this.errorLogs = [];

    page.on('console', message => {
      if (message.type() === 'error') {
        this.errorLogs.push(message.text());
      }
    });

    page.on('pageerror', err => {
      this.errorLogs.push(err.message);
    });
  }
}
