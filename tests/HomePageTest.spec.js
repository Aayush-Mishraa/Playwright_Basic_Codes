const {test, expect}=require('@playwright/test')//test is require to performe the test expect is use to validate the test so we import both 


//testblock
test("Home Page ",async ({page})=>//that annoynomus funstion have some fixture //so we pas fixture call page  
{
    await page.goto('https://www.demoblaze.com/index.html')
    const pageTitie =  await page.title()
    console.log('page title is :', pageTitie);// this is use to print the title 
    expect(page).toHaveTitle('STORE');
    expect(page).toHaveURL('STORE')//this is use to validate the title name
    page.close();// to close the page 
}
)