const {test, expect} = require('@playwright/test');

test("handle a DropDown", async ({page})=>
{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // await page.locator('#country').selectOption({lable:'India'});    // lable/visible text
    // // await page.locator('#country').selectOption('India')             //visibletext
    // // await page.locator('#country').selectOption({value: 'uk'});      //by using values
    //    await page.locator('#country').selectOption({index: 1});         //by using indexing


    //    //ther is onemore way

    //    await page.selectOption("#country",'india')                      // by text only but we directly calling by the fixure
        
       //Assertion (what type of assertion we do )
       //1)check number of option in dropdown 

    //    const options = await page.locator('#country option')

    //    await expect(options).toHaveCount(10)

       //2) check number of option in dorpdown - approch2
    //    const options = await page.$$('#country option')
    //    console.log("number of option : ", options.length); // to print total number of dropdown 

    //    await expect( options.length).toBe(10);
       
       //3) check presence of value in the dropdoen
    //    const content = await page.locator('#country').textContent();
    //    await expect(content.includes('India')).toBeTruthy();  // to check india is a part of dropdown or not 

      //4)checking presence of value in the dropdown 
      const options = await page.$$('#country option')
       let status = false;

    for(const option of options)
    {
        console.log(await option.textContent())
    }
       
       await page.waitForTimeout(5000); 


});

// npx playwright test tests/DropDown.spec.js --project chromium --headed
