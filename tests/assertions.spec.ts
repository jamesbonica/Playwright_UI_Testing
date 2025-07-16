import { test, expect } from '@playwright/test'

test('Assertions Demo', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com')
  //  await page.pause()
    // Assertions
    // check if element is present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1)

    if (await page.$('h1.chakra-heading')) {
        await page.locator('h1.chakra-heading').click()

    }

    // check if element is hidden or visible
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible()
 //   await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden()

    // check if element is enabled or disabled
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled()
  //  await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled()

    // check text
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen')
    await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('ABCD')

    // check attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a')
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass(/.*css-dpmy2a/)

    // chacke URL and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/.*Kitchen/)

    // visual validation
    await expect(page).toHaveScreenshot()
})