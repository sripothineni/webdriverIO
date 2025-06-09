import { TableHelper } from '../../util/TableHelper';
import allureReporter from '@wdio/allure-reporter'

describe('feature: working with webtable', () => {
    allureReporter.addFeature('Validating webtable nad finding element from it');
    it('handling webtable', async () => {
        allureReporter.addSeverity('Medium');
        allureReporter.addStep('opening URL');
        
        await browser.url("https://qavbox.github.io/demo/webtable/");
        const noOfRows = await $$("//table[@id='table01']/tbody/tr").length;
        const noOfCols = await $$("//table[@id='table01']/tbody/tr[1]/td").length;
        const getTableData = (row: number, col: number) => $(`//table[@id='table01']/tbody/tr[${row}]/td[${col}]`)

        allureReporter.addStep('checking the given value is present in the webtable');
        for (let r = 1; r <= noOfRows; r++) {
            for (let c = 1; c <= noOfCols; c++) {

                const cell_data = await getTableData(r, c).getText();
                if (cell_data === 'Selenium') {
                    //await $(`${getTableData(r,1)}/input`).click();
                    await $(`//table[@id='table01']/tbody/tr[${r}]/td[${1}]/input`).click();
                    console.log("cell data :", c, r + ":", cell_data);

                }
            }
        }
        await browser.pause(3000);
    });

    it('Handling webtable with reusable methods', async () => {
        allureReporter.addSeverity('critical');
        allureReporter.addDescription('checking the webtable contesnt through tableHelper', 'text');
        allureReporter.addArgument("Plotform","Windows");
        allureReporter.addStep('opening URL');
        await browser.url("https://qavbox.github.io/demo/webtable/");
        let table = new TableHelper("#table01");
        allureReporter.addStep('validating the no of rows');
        await expect(await table.getRowCount()).toBe(3);
        allureReporter.addStep('validating the no of cols');
        await expect(await table.getColCount()).toBe(5);
        allureReporter.addStep('checking the given value is present in the webtable');
        await table.deleteRowHavingText("Bugzilla");
        await browser.pause(5000);

    })
});