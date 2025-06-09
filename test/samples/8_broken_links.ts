import fetch from 'node-fetch';

describe('feature: testing broken links', () => {
    it('validating links', async () => {
        let baseURL = "https://qavbox.github.io/";
        await browser.url(`${baseURL}demo/links/`);

        await $$('a').forEach(async (link) => {
            await link.getAttribute('href').then(async (href) => {
                let url: string | URL = href;
                if (!url.startsWith('http')) {
                    console.log("Before: " + url);
                    url = new URL(url, baseURL);
                    console.log("After: " + url);
                }
                await fetch(url).then(async (response) => {
                    console.log(href, "::" +response.status);
                    //await expect(response.status).toBeLessThan(400);                       
                })
            })

        })
    });
});