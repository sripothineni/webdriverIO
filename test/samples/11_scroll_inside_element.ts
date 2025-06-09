describe('feature: scroll with in element', () => {
    it('webtable scrolling', async () => {
        const text = "Angelica Ramos";
        await browser.url('https://qavbox.github.io/demo/webtable/');
        const table = await $('#table02');
        await table.scrollIntoView();
        //need to use the javascript in this case

        await browser.execute((text) => {
            const cells = document.querySelectorAll('#table02 td');
            for (const cell of cells) {
                if (cell.textContent?.trim() === text) {
                    cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    break;
                }
            }
        }, text);

        // await browser.execute(async () => {
        //     var el = document.querySelector('#table02');
        //     if (el)
        //         while (await (await $('td=Angelica Ramos')).isDisplayed()) {
        //             el.scrollTop = el.scrollTop + 300;
        //         }

        // })
        await browser.pause(5000);


    });
});