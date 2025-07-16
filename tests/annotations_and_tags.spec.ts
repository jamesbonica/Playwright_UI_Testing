import { test } from '@playwright/test'

test.skip('Test One', async ({ page }) => {

})

test('Not Yet Ready', async ({ page }) => {

    await page.goto('https://google.com')
    test.fail()
})

test.fixme('Test to be Fixed', async ({ page }) => {


})

test('A Slow Test', async ({ page }) => {
    test.slow()


})

test('Skip Under Conditions', async({page, browserName}) => {

    test.skip(browserName === 'firefox')
})

// Annotations

test('Test Login Page @smoke', async({page}) => {


})