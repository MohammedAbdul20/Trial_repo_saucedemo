//@ts-check

import{test, expect} from '@playwright/test'

test("login and get names", async ({page}) => {

    await page.goto("https://www.saucedemo.com/");

    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");

    await page.getByRole("button", {name: 'Login'}).click();

    await expect(page).toHaveURL(/inventory/i);

    let names = [];

    let count  = await page.locator('.inventory_item').count();

    for (let i = 0; i < count; i++){
        names.push(await page.locator(".inventory_item_name ").nth(i).innerText());
    }
    console.log("Something right");
    console.log("names List contains: ", names);

    let prices = [];
    
    for(let i = 0; i < count; i++){
        prices.push(await page.locator(".inventory_item_price").nth(i).innerText());

    }
    console.log("Something wong");
    console.log("Price list contains these",prices);

    await page.locator(".btn.btn_primary.btn_small.btn_inventory ").nth(4).click();

    let cartCount = await page.locator(".shopping_cart_badge").innerText();

    await expect(cartCount).toBe('1');

});