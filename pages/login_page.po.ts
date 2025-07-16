import { Locator, Page } from "@playwright/test"

export class LoginPage {
    readonly username_textbox: Locator
    readonly password_textbox: Locator
    readonly login_button: Locator
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.username_textbox = this.page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = this.page.getByRole('textbox', { name: 'Password' })
        this.login_button = this.page.getByRole('button', { name: ' Login' })
    }

    async goto(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username: string, password: string) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

}