import {test, expect} from '@playwright/test'



test('Lotors', async ({page})=>

{
    await page.goto('https://www.demoblaze.com/index.html')
    // const links = await page.$$('a');
    
    // for(const link of links)
    // {
    //   const linktext = await link.textContext();
    //   console.log(linktext);
    // }
     page.waitForSelector("//div[@id='tbody']//div//h4/a")//THIS IS TO USE FOR WAIT THE ELEMENTS LOCATED 
    const products = await page.$$("//div[@id='tbody']//div//h4/a");

    for(const product of products)
    {
        const productName=await product.textContent();
        console.log(productName)
    }

});

// npx playwright test LocatingMultipleElement.spec.js --project chromium --headed