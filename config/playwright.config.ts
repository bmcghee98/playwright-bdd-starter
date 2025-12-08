import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './features',
  timeout: 30 * 1000,
  fullyParallel: true,

  reporter: [
    ['list'],
    ['json', { outputFile: 'reports/report.json' }],
    ['html', { open: 'never' }],
  ],

  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],
});
