describe('feature: checking timeouts', () => {
    it('Implicit wait', async () => {
        await browser.url("https://qavbox.github.io/demo/");
        await console.log(browser.capabilities);

    });
    it('Wait Until a text to appear', async () => {
        await browser.url("https://qavbox.github.io/demo/delay/");
        await $("input[value='Try me!']").click();
        let element = await $('#delay');
        await element.waitUntil(async function () {
            return (await element.getText()) != ""
        });
        expect(await element.getText()).toContain("appeared after");
    });
    it.only('Wait Until a text to appear', async () => {
        await browser.url("https://qavbox.github.io/demo/");
        await $('=SignUp Form').click();
        let elements = await $$("input[type='text']");
        await browser.waitUntil(async function () {
            return (await elements.length) > 3
        },
            {
                timeout: 6000, timeoutMsg: "All the elements were not loaded yet"

            })
        expect(await elements.length).toBeGreaterThan(3);
    });

});