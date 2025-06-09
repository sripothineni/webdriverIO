describe('Dynamic URL for envs', () => {
    it('test diff urls based on env', async() => {
        browser.url("");
        await browser.pause(3000);
        //command to run script :: $env:env = "prod"; npm run wdio
    });
});