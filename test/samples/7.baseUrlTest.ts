import appData from '../../util/appData'

describe('baseURL based on env', () => {
    it('test diff urls based on env', async()=>{
        browser.url('/');
        console.log(appData.environment);
        console.log(appData.credentials);
        await browser.pause(4000);
    })
})