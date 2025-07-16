import { test} from '../utils/fixtures.ts'

test('Login with Page Object', async ({ 
    login_page }) => {

    await login_page.goto()

    await login_page.login('tomsmith', 'SuperSecretPassword!')


})