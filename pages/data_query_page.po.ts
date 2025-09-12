import { expect, Locator, Page } from "@playwright/test"

export class DataQueryPage {
    readonly categories_select_field: Locator
    readonly id_category: Locator;
    readonly personal_info_category: Locator;
    readonly general_info_category: Locator;
    readonly contact_info_category: Locator;
    readonly cat_submit_button: Locator;
    readonly page: Page

    constructor(page: Page) {
        this.page = page
        this.categories_select_field = this.page.getByText('Categories')
            .filter({ has: page.getByText('Select...') })
        this.id_category = this.page.getByRole('checkbox', { name: 'ID' })
        this.personal_info_category = this.page.getByRole('checkbox', { name: 'Personal Info' })
        this.general_info_category = this.page.getByRole('checkbox', { name: 'General Info' })
        this.contact_info_category = this.page.getByRole('checkbox', { name: 'Contact Info' })
        this.cat_submit_button = this.page.getByRole('checkbox', { name: 'Contact Info' })
    }

    /**
     *
     *
     * @param {string[]} values
     * @memberof DataQueryPage
     * We want to be able to pass one or more string values in an array to the function 
     * to test selecting one or more categories
     */
    async selectCategoriesDropdown(values: string[]) {

        await this.openCategoriesDropdown();

        // adding checks for element to be visible. Possible overkill?
        await expect(this.id_category).toBeVisible()
        await expect(this.personal_info_category).toBeVisible()
        await expect(this.general_info_category).toBeVisible()
        await expect(this.cat_submit_button).toBeVisible()

        for (const val of values) {
            if (val === 'ID') {
                await this.id_category.check();
            } else if (val === 'Personal Info') {
                await this.personal_info_category.check();
            } else if (val === 'General Info') {
                await this.general_info_category.check();

            } else if (val === 'Contact Info') {
                await this.general_info_category.check();
            }

        }
    }

    // Click to reveal Categories dropdown
    async openCategoriesDropdown() {

        await this.categories_select_field.click();
    }
    async clickCategoriesSubmitButton() {
        await this.cat_submit_button.click();
    }

    async isIdChecked(): Promise<boolean> {
        return this.id_category.isChecked();
    }

    async isPersonalInfoChecked(): Promise<boolean> {
        return this.personal_info_category.isChecked();
    }

    async isGeneralInfoChecked(): Promise<boolean> {
        return this.general_info_category.isChecked();
    }

    async isContactInfoChecked(): Promise<boolean> {
        return this.contact_info_category.isChecked();
    }


}

