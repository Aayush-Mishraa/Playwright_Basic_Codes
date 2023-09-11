const {test, expect}=require('@playwright/test');

test("Handle inputbox", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    //First Name Field

    await expect(await page.locator('[type="text"]').nth(0)).toBeVisible();
    await expect(await page.locator('[type="text"]').nth(0)).toBeEmpty();
    await expect(await page.locator('[type="text"]').nth(0)).toBeEditable();
    await expect(await page.locator('[type="text"]').nth(0)).toBeEnabled();



    await page.locator('[type="text"]').nth(0).fill('Aayush Mishra');

    await page.waitForTimeout(5000);

});


// npx playwright test tests/Inputbox.spec.js --project chromium --headed