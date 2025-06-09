import utility from "./utility";

describe('feature : locators', () => {
    it('should select ', async () => {
        browser.url("https://qavbox.github.io/demo/");
        //await $('=SignUp Form').click(); // any element that has text
        //or
        await $('*=SignUp').click(); // any element that conatains text


        console.log("Attribute is::", await $('label=Full Name').getAttribute('id'));
        console.log(await $('h3*=below').getText());

        await $("input[value='Home']").click();
        await $('*=WebTable').click();
        await $("input[value='Home']").click();
        await browser.pause(3000);

        // capturing all heperlinks from the page

        const links = await $$('<a>');
        for (const link of links) {
            console.log("Link href: ", await link.getAttribute('href'));
            console.log("Link text: ", await link.getText());
        }

    });
    it("should select radio buttons", async () => {
        browser.url("https://qavbox.github.io/demo/");
        await $('*=SignUp').click(); // any element that conatains text

        const radiobuttons = await $$('input[name="experience"]');
        console.log("Length: ", radiobuttons.length);

        for (const rb of radiobuttons) {
            const value = await rb.getValue();
            console.log(value);

            await rb.click();
            const isSelected = await rb.isSelected();
            await expect(isSelected).toBe(true);
        }
        await browser.pause(5000);

    });

    // const options = $$('#tools option');
    // const selectedOptions = getSelectedOptions(options);

    // async function getSelectedOptions(options){
    //     let selectedText="";
    //     for(let option of options){
    //         if(awai option.is)

    //     }
    // }

    it("should select multiselect dropdown", async () => {
        browser.url("https://qavbox.github.io/demo/");
        await $('*=SignUp').click(); // any element that conatains text

        const multiSelect = $('#tools');

        const options = await $$('#tools option');
        console.log("Options length: ", options.length);
        await expect(options).toHaveLength(10);

        await multiSelect.selectByIndex(1);
        console.log(await $("#tools option[value='cypress']").isSelected());
        await expect(await $("#tools option[value='cypress']").isSelected()).toBe(true);
        await expect(await utility.getSelectedOption(options)).toContain("Cypress");

        await multiSelect.selectByVisibleText('TestStackWhite');

        await multiSelect.selectByAttribute('value', 'codedui');


        await browser.pause(3000);

    })

    it.only("alerts", async () => {
        await browser.url("https://qavbox.github.io/demo/alerts/");
        await $("//input[@name='commit']").click();
        try {
            await browser.waitUntil(async () => await browser.isAlertOpen(), {
                timeout: 3000,
                timeoutMsg: 'Alert did not appear in time'
            });

            const alertText = await browser.getAlertText();
            console.log('Alert Text:', alertText);
            await browser.acceptAlert();

        } catch (error) {
            console.warn('No alert to handle:', error);
        }

        await browser.pause(3000);

    })

});