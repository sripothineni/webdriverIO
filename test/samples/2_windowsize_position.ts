import { browser } from '@wdio/globals';
describe('Window size', () => {

    it("Browser commands", async () => {
        console.log(await browser.getWindowRect()); //op: { height: 798, width: 1051, x: 9, y: 9 }

        const position = await browser.getWindowRect();
        console.log(position.x + "|" + position.y);
        await browser.setWindowRect(50, 9, 1051, 798);
        console.log(await browser.getWindowRect());

        await browser.setWindowSize(1100,700);
    })

});