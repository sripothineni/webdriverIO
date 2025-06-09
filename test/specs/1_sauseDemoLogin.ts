
import sauseLoginPage from "../pageobjects/sause.login.page";
import loginData from "../data/login.json";

describe("SauseDemo app login", () => {
   
    beforeEach("Open URL", async()=>{
        await browser.url("https://www.saucedemo.com/");
    })
   
    it("Should login with valid standard user", async () => {
        // const userNameTextBox = $('#user-name');
        // const passwordTextBox = $('#password');
        // const loginButton = $('#login-button');

        sauseLoginPage.performLogin(loginData.Valid_users.standard_user.username,loginData.Valid_users.standard_user.password);

        // await userNameTextBox.setValue("standard_user");
        // await passwordTextBox.setValue("secret_sauce");
        // await loginButton.click();

        await expect(sauseLoginPage.productsTitle).toBeDisplayed();
    })

        it("Should login with valid standard user", async () => {
        const userNameTextBox = $('#user-name');
      
        await userNameTextBox.setValue("standard_user");
        console.log("username is: ", await userNameTextBox.getValue());
        await userNameTextBox.addValue("_sreenath");
        console.log("username is: ", await userNameTextBox.getValue());  
        await userNameTextBox.clearValue();
        console.log("username is: ", await userNameTextBox.getValue());
    
    })

        it("Should fetch element attribute", async () => {
        const element = await $('#login_credentials');
        //console.log("Element text is: ", await element.getText());
        console.log("Element attribute value: ", await element.getAttribute("class"));
        await expect(element).toHaveAttribute("class","login_credentials123");
    
    })
})