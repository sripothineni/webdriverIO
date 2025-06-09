class Datepicker {
    get popupConcentButton() {
        return $('.fc-button-label')
    }

    get simpleDatPicker() {
        return $("li[id='Simple Date Picker']");
    }

    get dropdownDatPicker() {
        return $("//li[@id='DropDown DatePicker']");
    }

    get iconTriggerDatPicker() {
        return $("//li[@id='Icon Trigger']");
    }

    get datePickerTextBox() {
        return $("//input[@id='datepicker']");
    }
    get simpleDropdownIframe() {
        //return $('.demo-frame');
        return $("//iframe[contains(@data-src,'practice/datepicker/dropdown-month-year')]")
    }
    
    get datepickerMonthDropdown() {
        return $('.ui-datepicker-month');
    }

    get datepickerYearDropdown() {
        return $('.ui-datepicker-year');
    }

    private selectDay = (day: number) => $(`//*[@class='ui-datepicker-calendar']//a[normalize-space()='${day}']`);
    //*[@class='ui-datepicker-calendar']//a[normalize-space()='1']

    //datepicker icon trigger

    get iconDatepickerIframe() {
        return $("//iframe[contains(@data-src,'/demoSite/practice/datepicker/icon-trigger')]");
    }
    get datepickerIcon() {
        return $('.ui-datepicker-trigger');
    }
    get datePickerPrevIcon() {
        return $("//span[@class='ui-icon ui-icon-circle-triangle-w']");
    }
    get datePickerNextIcon() {
        return $("//span[@class='ui-icon ui-icon-circle-triangle-e']");
    }

    get datepickerMonthLabel() {
        return $("//span[@class='ui-datepicker-month']");
    }

    get datepickerYearLabel() {
        return $("//span[@class='ui-datepicker-year']");
    }

    //Actions
    async clickOnSimpleDatePickerTab() {
        await this.simpleDatPicker.click();
    }

    async clickOnDropdownDatePickerTab() {
        await this.dropdownDatPicker.click();
    }
    async clickOnIconTriggerDatePickerTab() {
        await this.iconTriggerDatPicker.click();
    }

    async setDateSimpleCalender(date: string) {
        await browser.switchFrame(await this.simpleDropdownIframe);
        await this.datePickerTextBox.setValue(date);
        await browser.switchToParentFrame();
    }

    async clickOnDatepicker() {
        browser.pause(3000);
        await browser.switchFrame(await this.simpleDropdownIframe);
        await this.datePickerTextBox.click();
    }

    async clickOnConcent() {
        await this.popupConcentButton.waitForDisplayed({ timeout: 15000 });
        await this.popupConcentButton.click();
    }

    async selectDropdownDate(day: number, month: string, year: number) {
        await this.datepickerYearDropdown.selectByAttribute("value", String(year));
        await this.datepickerMonthDropdown.selectByVisibleText(month);
        await this.selectDay(day).click();
        await console.log("selected date:", await this.datePickerTextBox.getValue());
        await browser.switchToParentFrame();
    }

    private async getActualDateValueInMilliSeconds() {
        const actualMonth = await this.datepickerMonthLabel.getText();
        const actualYear = await this.datepickerYearLabel.getText();

        const actualMonthInNumber = new Date(`${actualMonth}, 2012`).getMonth() + 1;
        const actualnYearInNumber = Number(actualYear);
        const actualDateValue = new Date(actualnYearInNumber, actualMonthInNumber).valueOf();
        return actualDateValue;
    }

    private getExpectedDateValueInMilliSeconds(month: string, year: number): number {
        const expectedMonthInNumber = new Date(`${month}, 2012`).getMonth() + 1;
        const expectedDateValue = new Date(year, expectedMonthInNumber).valueOf();
        return expectedDateValue;
    }

    private async navigateToMatchingDateGrid(month: string, year: number) {
        while (await this.getActualDateValueInMilliSeconds() !== this.getExpectedDateValueInMilliSeconds(month, year)) {
            console.log(await this.getActualDateValueInMilliSeconds(), this.getExpectedDateValueInMilliSeconds(month, year));
            if (await this.getActualDateValueInMilliSeconds() > this.getExpectedDateValueInMilliSeconds(month, year)) {
                await this.datePickerPrevIcon.waitForClickable();
                await this.datePickerPrevIcon.click();
            } else if (await this.getActualDateValueInMilliSeconds() < this.getExpectedDateValueInMilliSeconds(month, year)) {
                await this.datePickerNextIcon.waitForClickable();
                await this.datePickerNextIcon.click();
            }
        }
    }

    async selectDateFromIconTrigger(day: number, month: string, year: number) {
        await browser.switchFrame(await this.iconDatepickerIframe);
        await this.datepickerIcon.click();
        await this.navigateToMatchingDateGrid(month, year);
        await this.selectDay(day).click();
    }
}
export default new Datepicker();