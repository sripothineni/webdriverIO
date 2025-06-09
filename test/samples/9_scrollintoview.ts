describe('feature: different types of scrolling', () => {
    it('verify scroll', async() => {
        await browser.url("https://qavbox.github.io/demo/signup/");
        await browser.setWindowSize(700,500);
        await $('=Tutorials!').scrollIntoView(); // alignToTop is default tue
        //await $('=Tutorials!').scrollIntoView({behavior:"smooth"}); // behaviour smooth incase of video recording

        
        await browser.url('https://www.npmjs.com/package/allure-commandline');
        await $('=Node.js API').scrollIntoView(false); // wont scroll to top the element is in the bottum of the page
        

        await browser.pause(3000);

        
    });
});