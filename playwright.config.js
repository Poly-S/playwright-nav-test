import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: true,
    viewport: { width: 1280, height: 720 }
  },
  webServer: {
    command: 'npx http-server ./pages -p 3000',
    port: 3000,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000
  }
});
