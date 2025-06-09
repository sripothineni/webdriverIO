describe('Working with find elements', () => {
    it('should find all google link elements', async () => {
        await browser.url("https://www.google.com/");
        await browser.maximizeWindow();
        const elements = $$('//a');

        for (let i = 0; i < await elements.length; i++) {
            const linkText = await elements[i].getText();
            if (linkText !== "")
                console.log("Linktext :: ", linkText);
        }


    });
});