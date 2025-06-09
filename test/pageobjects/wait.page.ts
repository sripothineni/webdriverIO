class WaitPage{
    get startButton() {
        return $('#start >button');
    }
    get welcomeLabel() {
        return $('#finish >h4');
    }
    get loadingGIf(){
        return $('#loading');
    }

    async clickStartButton(){
        await this.startButton.click();
    }

    async getWelcomeMessageText():Promise<string>{
        // Approach 1
        //await this.welcomeLabel.waitForDisplayed({timeout:15000,timeoutMsg:"Element is not visible yet"});
        
        //Approach 2: another way with waitUntil
        //await browser.waitUntil(async() => await this.welcomeLabel.getText()!="",{timeout:15000, timeoutMsg:"element is not visible yet"});
        
        //Approach 3: another way by handling Spinner
        // await this.loadingGIf.waitForDisplayed();
        // await this.loadingGIf.waitForClickable({reverse:true,timeout:15000, timeoutMsg:"element is not disappeared"});
        console.log("Text is::",await this.welcomeLabel.getText());
        return await this.welcomeLabel.getText();
    }

    async waitForLoadingIconToDisappear(){
        await this.loadingGIf.waitForDisplayed();
        await this.loadingGIf.waitForClickable({reverse:true,timeout:15000, timeoutMsg:"element is not disappeared"});
    }
}

export default new WaitPage();