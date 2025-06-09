import waitPage from "../pageobjects/wait.page";

describe('fearure: wait stratagy', () => {
    it('should wait until the element appear', async() => {
        await browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
        await browser.maximizeWindow();
        await waitPage.clickStartButton();
        await waitPage.waitForLoadingIconToDisappear()
        await expect(await waitPage.getWelcomeMessageText()).toContain("Hello World!");
        
    });
});