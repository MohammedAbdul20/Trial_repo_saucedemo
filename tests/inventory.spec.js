//@ts-check

import{test, expect} from '@playwright/test'

test("login and get names", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.getByRole("button", {name: 'Login'}).click();

    await expect(page).toHaveURL(/inventory/i);

    let names = [];

    // let count  = await page.locator()
    // for ()


});