import {test, expect, firefox} from '@playwright/test'

test('Slow motion and video recording demo', async() => {

    const browser = await firefox.launch({
        slowMo: 500,
        headless: false,

    
    })

    const context = await browser.newContext({
        // recordVideo: {
        //     dir: 'videos/',
        //     size: {width: 800, height: 600}
        // }


    })

    const page = await context.newPage()

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('textbox', { name: 'Password' }).press('Tab');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('i.oxd-icon:nth-child(3)').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

    await context.close()


})