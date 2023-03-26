import {test as base, expect} from '@playwright/test';

export const test = base.extend({
  page: async ({baseURL, page}, use) => {
    const errorLogs = [];

    page.on('console', message => {
      if (message.type() === 'error') {
        errorLogs.push(message.text());
      }
    });

    page.on('pageerror', err => {
      errorLogs.push(err.message);
    });

    await use(page);
    expect(errorLogs).toStrictEqual([]);
  },
});
