import { test } from '../utils/fixtures.ts'
import { expect } from '@playwright/test'

test.describe('Data Matching Query Page', async () => {

    test.beforeAll('Login to App', async ({
        login_page
    }) => {
        await login_page.goto()
        await login_page.login("username", "password")

    })

    test('Confirm the Category checkboxes are unselected by default', async ({
        data_query_page }) => {

            //navigate to correct page step goes here

            // click to reveal categories dropdown
            data_query_page.clickCategoriesSubmitButton()

            // assert checkboxes are unselected, custom error messages added
            await expect(data_query_page.isIdChecked(), 'The Id is checked be default!!').toBeFalsy()
            await expect(data_query_page.isGeneralInfoChecked(), 'The General Info is checked be default!!').toBeFalsy()
            await expect(data_query_page.isPersonalInfoChecked(), 'The Personal Info is checked be default!!').toBeFalsy()
            await expect(data_query_page.isContactInfoChecked(), 'The Contact Info is checked be default!!').toBeFalsy()

    })

})