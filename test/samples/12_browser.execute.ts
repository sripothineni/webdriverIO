describe('browser.execute overview', () => {
    it('veryfying browser.execute methods.....', async() => {
        await browser.url('https://www.npmjs.com/package/node-fetch');
        let url = await browser.execute(()=>{
            document.getElementById('package-tab-code')?.click(); // js click
            return document.URL;
            //refer document object in w3 schools for more iformation
        })
        console.log(url);
        await browser.pause(4000);
        
    });
});