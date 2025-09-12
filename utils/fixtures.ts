import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/login_page.po'
import { DataQueryPage } from '../pages/data_query_page.po'

type MyFixtures = {
    login_page: LoginPage
    data_query_page: DataQueryPage
}

export const test = base.extend<MyFixtures>({
    login_page: async ({ page }, use) => {
        await use(new LoginPage(page))

    },
    data_query_page: async ({ page }, use) => {
        await use(new DataQueryPage(page))
    }

})

export { expect } from '@playwright/test'