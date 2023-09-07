import {test, expect} from '@playwright/test'



test('Lotors', async ({page})=>
{
    await page.goto("https://www.demoblaze.com/index.html")
    // await page.locator("css, xpath , property")
    //await page.click("locator") first perfome the cation on the given locator
    await page.locator("id=Login2").click();
    await page.locator("#Login2").click();
    await page.click("id=Login2");


    // // Provide user name/
    // // css locator
    // await page.locator('#loginusername').fill("pavanol")
    // await page.fill('#loginusername');
    await page.type('#loginusername','pavanol');
    await page.type("input[id='loginpassword']",'test@123');
    await  page.click("//button[] ");
    const logoutlink=await page.locator('');
    expect(logoutlink).toBeVisible('LogOut');


    

});