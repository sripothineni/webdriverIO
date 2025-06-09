class DropDownPage{

    get skillsDropdown(){
        return $('#Skills');
    }
    get popupConcentButton(){
        return $('.fc-button-label')
    }
    get countryDropdown(){
        return $('.select2-container');
    }
    get searchTextBox(){
        return $('.select2-search__field');
    }
    get passwordIextBox(){
        return $('#firstpassword');
    }
 
    async clickOnConcent(){
        await this.popupConcentButton.waitForDisplayed({timeout:5000});
        await this.popupConcentButton.click();
    }
    async clickOnCountryDropdown(){
        await this.passwordIextBox.scrollIntoView();
        await this.countryDropdown.click();
    }
    async enterCountryText(partialCountryName:string){
        await this.searchTextBox.setValue(partialCountryName);
    }
    async slectCountry(country:string){
        const countryElement=$(`//*[@id="select2-country-results"]/li[text()='${country}']`);
        await countryElement.click();
    }
}

export default new DropDownPage();