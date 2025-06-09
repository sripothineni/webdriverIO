describe('feature: handling windows', () => {
    it('verify browser windows...', async () => {
        browser.url("https://qavbox.github.io/demo/links/");
        let parentWindow = await browser.getWindowHandle();
        await browser.pause(2000);
        await browser.newWindow("https://www.google.com");
        console.log(await browser.getTitle());
        //await browser.switchToWindow(parentWindow);
        await browser.switchWindow("Browser Windows"); // matcher of  title, url or window name 
        console.log(await browser.getTitle());

    });

    it('verify multiple browser windows...', async () => {
        browser.url("https://qavbox.github.io/demo/links/");
        let parentWindow = await browser.getWindowHandle();

        await $("input[value='Multi Window']").click();

        await browser.switchWindow("About me - qavalidation");
        console.log("qavalidation : ", await $$("a").length);

        await browser.switchWindow("QAVBOX Demo");
        console.log("QAVBOX Demo : ", await $$("a").length);

        await browser.switchWindow(parentWindow);
        console.log("parent window:  : ", await $$("a").length);
    });
    
    it('verify multiple browser windows with getwindowhandles...', async () => {
        browser.url("https://qavbox.github.io/demo/links/");
        let parentWindow = await browser.getWindowHandle();

        await $("input[value='Multi Window']").click();

        const windows = await browser.getWindowHandles();

        for (const window of windows) {
            if (parentWindow != window) {
                await browser.switchToWindow(window);
                expect(await browser.getTitle()).not.toContain("Browser windows");
                console.log(await browser.getTitle());
            }
        }
        browser.switchToWindow(parentWindow);
    });

    it.only('closing specific windows', async () => {
        browser.url("https://qavbox.github.io/demo/links/");
        let parentWindow = await browser.getWindowHandle();

        await $("input[value='Multi Window']").click();

        const windows = await browser.getWindowHandles();

        for (const window of windows) {
            if (parentWindow != window) {
                await browser.switchToWindow(window);
                await browser.getTitle();
                await browser.closeWindow();
            }
        }
        console.log(await browser.getTitle());
        await browser.switchToWindow(parentWindow);
        await browser.pause(5000);
    });
});