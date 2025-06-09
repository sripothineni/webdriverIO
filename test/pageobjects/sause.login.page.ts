import Page from "./page";

class SauseLogiPage extends Page{

    private get userNameTextBox() {
        return $('#user-name');
    } 
    private get passwordTextBox() {
        return $('#password');
    }
    private get loginButton() {
        return $('#login-button');
    }
    public get productsTitle() {
        return $('.title');
    } 

    async performLogin(username:string, password:string){
        await this.userNameTextBox.setValue(username);
        await this.passwordTextBox.setValue(password);
        await this.loginButton.click();
    }
}

export default new SauseLogiPage();