const {test, expect}=require('@playwright/test');

test("Assersyion basics", async ({page})=>
{
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

    await expect(page).toHaveURL("https://demo.nopcommerce.com/register?returnUrl=%2F");

    await expect(page).toHaveTitle("nopCommerce demo store. Register");

   const logo = await page.locator("img[alt='nopCommerce demo store']");
    await expect(logo).toBeVisible();
    const MaleRAdioButton = await page.locator("#gender-male");
    await MaleRAdioButton.click();
    await expect(MaleRAdioButton).toBeChecked();

    const newsLetter =  page.locator('#Newsletter')
    await expect(newsLetter).toBeChecked()  
    


});