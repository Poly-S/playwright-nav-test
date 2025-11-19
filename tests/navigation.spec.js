// @ts-check
import { test, expect } from '@playwright/test';
// Ссылка на гитхаб: https://github.com/lasnick7/playwright-nav-test

test.describe('Navigation tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page has "Home" title check', async ({ page }) => {
    const h1_title = page.locator('h1');
    await expect(h1_title).toBeVisible();
    await expect(h1_title).toHaveText('Home');
  });

    test('About link navigates to About and H1 updates check', async ({ page }) => {
    const about_link = page.getByRole('link', { name: 'About' });
    const h1_title = page.locator('h1');

    await expect(about_link).toBeVisible();
    await expect(about_link).toHaveAttribute('href', 'about.html');
    await about_link.click();
    await expect(page).toHaveURL(/about\.html$/);
    await expect(h1_title).toBeVisible();
    await expect(h1_title).toHaveText('About');
  });

  test('Contact link navigates to About and H1 updates check', async ({ page }) => {
    const contact_link = page.getByRole('link', { name: 'Contact' });
    const h1_title = page.locator('h1');

    await expect(contact_link).toBeVisible();
    await expect(contact_link).toHaveAttribute('href', 'contact.html');
    await contact_link.click();
    await expect(page).toHaveURL(/contact\.html$/);
    await expect(h1_title).toBeVisible();
    await expect(h1_title).toHaveText('Contact');
  });

  test('Additional check: text on all pages', async ({ page }) => {
    const about_link = page.getByRole('link', { name: 'About' });
    const contact_link = page.getByRole('link', { name: 'Contact' });
    const p_element = page.locator('p')

    await expect(p_element).toBeVisible();
    await expect(p_element).toHaveText('Welcome to the Home page.');
    await about_link.click();
    await expect(p_element).toBeVisible();
    await expect(p_element).toHaveText('This is the About page.');
    await contact_link.click();
    await expect(p_element).toBeVisible();
    await expect(p_element).toHaveText('Reach us via contact page.');
  });

  test('Additional check: open links with keyboard', async ({ page }) => {
    const about_link = page.getByRole('link', { name: 'About' });
    const contact_link = page.getByRole('link', { name: 'Contact' });
    
    await about_link.focus();
    await about_link.press('Enter');
    await expect(page).toHaveURL(/about\.html$/);
    await contact_link.focus();
    await contact_link.press('Enter');
    await expect(page).toHaveURL(/contact\.html$/);
  });

    test('Additional check: page titles', async ({ page }) => {
    const about_link = page.getByRole('link', { name: 'About' });
    const contact_link = page.getByRole('link', { name: 'Contact' });

    await expect(page).toHaveTitle('Home');
    await about_link.click();
    await expect(page).toHaveTitle('About');
    await contact_link.click();
    await expect(page).toHaveTitle('Contact');
  });
})
