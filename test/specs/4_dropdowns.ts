import dropdownPage from "../pageobjects/dropdown.page";

describe('feature: handle dropdown', () => {
    beforeEach("open app",async()=>{
        await browser.url("https://demo.automationtesting.in/Register.html");
        await dropdownPage.clickOnConcent();
    });

    it('Should select dropdown by text', async() => {
        await dropdownPage.skillsDropdown.selectByVisibleText('Client Support');
        await browser.pause(2000);        
    });
    
    it('Should select dropdown by attribute', async() => {
        await dropdownPage.skillsDropdown.selectByAttribute("value","Fortran");
        await browser.pause(2000);        
    });
    
    it('Should select dropdown by index', async() => {
        await dropdownPage.skillsDropdown.selectByIndex(15);
        await browser.pause(2000);        
    });

    it.only('should select country from the dropdown', async() => {
        await dropdownPage.clickOnCountryDropdown();
        await dropdownPage.enterCountryText("ind");
        await dropdownPage.slectCountry("India");
        await browser.pause(3000);

    });
});