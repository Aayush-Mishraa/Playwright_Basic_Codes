const {test, expect} = require('@playwright/test');

test("handle a Checkbox", async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator('#checkBoxOption1').check();
    // await page.check('#checkBoxOption1');//second way 

    expect(await page.locator('#checkBoxOption1')).toBeChecked();
    expect(await page.locator('#checkBoxOption1').isChecked()).toBeTruthy();//second way 
    expect(await page.locator('#checkBoxOption2').isChecked()).toBeFalsy();
    await page.waitForTimeout(5000);

    //for Multiple checkboxes
    const checkboxesLocators = ['#checkBoxOption1',
                                '#checkBoxOption2'];


    for(const locator of checkboxesLocators  ){

        await page.locator(locator).check();


    }
// unselect multiple checkboxes which are already selected 
    for(const locator of checkboxesLocators  )
    {
        if(await page.locator(locator).isChecked())
        {
            await page.locator(locator).uncheck();

        }

    }

});


// npx playwright test tests/Checkboxes.spec.js --project chromium --headed