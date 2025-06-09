import datepickerPage from "../pageobjects/datepicker.page";

describe('Feature: Date pickers handling', () => {
    beforeEach("open app", async () => {
        await browser.url("https://www.globalsqa.com/demo-site/datepicker/#Simple%20Date%20Picker");
        await browser.maximizeWindow();
        await datepickerPage.clickOnConcent();
    });
    it('should able to select the date : simple date picker', async () => {
        await datepickerPage.setDateSimpleCalender("26/03/1990");
        await browser.pause(3000);

    });

    it('should able to select the date : dropdown date picker', async () => {
        await datepickerPage.clickOnDropdownDatePickerTab();
        await datepickerPage.clickOnDatepicker();
        const day = 1, month = "Apr", year = 2020;
        await datepickerPage.selectDropdownDate(day, month, year);
        await browser.pause(3000);
    });

    it.only('should able to select the date : simple date picker', async () => {
        await datepickerPage.clickOnIconTriggerDatePickerTab();
        const day = 1, month = "Apr", year = 2026;
        await datepickerPage.selectDateFromIconTrigger(day,month,year);
        await browser.pause(5000);
    });
});