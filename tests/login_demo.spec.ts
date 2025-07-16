import { test, expect } from '@playwright/test'

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com')

    await page.getByRole('textbox', { name: 'Enter your username' }).fill('joeyvitamins')
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('Password')
    await page.getByRole('link', { name: 'Sign in' }).click()

})

test('Demo Login Test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('textbox', { name: 'Password' }).press('Tab');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('i.oxd-icon:nth-child(3)').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

})

test.fixme('Demo Login Test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login');
    // Is there a way to fix the Playwright browser triggering an "Are you human?" alert after login?
    await page.getByRole('textbox', { name: 'Email:' }).click();
    await page.getByRole('textbox', { name: 'Email:' }).fill('admin@yourstore.com');
    await page.getByRole('textbox', { name: 'Email:' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password:' }).fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click({ timeout: 4000 });
    await page.getByRole('link', { name: 'Logout' }).click({ timeout: 4000 })

})