import { test as base } from '@playwright/test'
import { LoginPage } from '../pages/login_page.po'

type MyFixtures = {
    login_page: LoginPage
}

export const test = base.extend<MyFixtures>({
    login_page: async ({ page }, use) => {
        await use(new LoginPage(page))
    },

})

export {expect} from '@playwright/test'