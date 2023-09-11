const {test, expect}=require('@playwright/test');

test("Assersyion basics", async ({page})=>
{

    await page.goto("https://demoblaze.com/");
    //hard assertion 
    // await expect(page).toHaveTitle('STORE')
    // await expect(page).toHaveURL("https://demoblaze.com/");
    // await expect(page.locator('#nava')).toBeVisible();


    //SOft assertion
  
    //hard assertion 
    await expect.soft(page).toHaveTitle('STORE445')  //Worng title
    await expect.soft(page).toHaveURL("https://demoblaze.com/");
    await expect.soft(page.locator('#nava')).toBeVisible();


});