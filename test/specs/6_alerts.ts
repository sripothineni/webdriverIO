describe('feature:alert', () => {
    beforeEach("open app", async()=>{
        await browser.url("https://the-internet.herokuapp.com/javascript_alerts");
        await browser.maximizeWindow();
    })

    it.only('should hande JS alert', async() => {
        const jsAlertButton = $("//button[normalize-space()='Click for JS Alert']");
        const result = $('#result');
        await jsAlertButton.click();
        await expect(await browser.getAlertText()).toEqual('I am a JS Alert');
        await browser.acceptAlert();
        await expect(result).toEqual('You successfully clicked an alert');
        
    });

    it('should hande JS confirm', async() => {
        const jsConfirmAlertButton = $("//button[normalize-space()='Click for JS Confirm']");
        const result = $('#result');
        await jsConfirmAlertButton.click();
        await browser.dismissAlert();
        await expect(result).toHaveText('You clicked: Cancel');
        
        await jsConfirmAlertButton.click();
        await browser.acceptAlert();
        await expect(result).toHaveText('You clicked: Ok');
        
    });
    
    it('should hande JS prompt', async() => {
        // const jsPromptAlertButton = $("//button[normalize-space()='Click for JS Prompt']");
        // const result = $('#result');
        
    });
});