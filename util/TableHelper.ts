import { $, $$ } from '@wdio/globals';
export class TableHelper {
  private tableSelector: string;

  constructor(tableSelector: string) {
    this.tableSelector = tableSelector;
  }

  // get table row count
  async getRowCount(): Promise<number> {
    const rows = await $$(`${this.tableSelector} tbody tr`);
    return rows.length;
  }

  // get table col count
  async getColCount(): Promise<number> {
    const rows = await $$(`${this.tableSelector} tbody tr:nth-child(1) td`);
    return rows.length;
  }

  // get given cell and row cell data 
  async getCellText(rowIndex: number, colIndex: number): Promise<string> {
    const cell = await $(`${this.tableSelector} tbody tr:nth-child(${rowIndex}) td:nth-child(${colIndex})`);
    return cell.getText();
  }

  // select checkbox of the given row
  async clickCheckboxInRow(rowIndex: number): Promise<void> {
    const checkbox = await $(`${this.tableSelector} tbody tr:nth-child(${rowIndex}) td input[type="checkbox"]`);
    await checkbox.click();
  }


  // async clickButtonInRow(rowIndex: number): Promise<void> {
  //   const button = await $(`${this.tableSelector} tbody tr:nth-child(${rowIndex}) td button`);
  //   await button.click();
  // }

  // click on delete button of a given row
  async clickDeleteButtonInRow(rowIndex: number): Promise<void> {
    const checkbox = await $(`${this.tableSelector} tbody tr:nth-child(${rowIndex}) td input[type="button"]`);
    await checkbox.click();
  }

  // checking the checkbox in a given row is checked or not
  async isCheckboxSelected(rowIndex: number): Promise<boolean> {
    const checkbox = await $(`${this.tableSelector} tbody tr:nth-child(${rowIndex}) td input[type="checkbox"]`);
    return checkbox.isSelected();
  }

  // method to find the given text in the table
  async deleteRowHavingText(cellText: string): Promise<void> {
    for (let r = 1; r <= await this.getRowCount(); r++) {
      for (let c = 1; c <= await this.getColCount(); c++) {
        const cell_data = await this.getCellText(r, c);
        if (cell_data === cellText) {
          await this.clickCheckboxInRow(r);
          await this.clickDeleteButtonInRow(r);
          //$(`//table[@id='table01']/tbody/tr[${r}]/td[${1}]/input`).click();
          console.log("cell data :", c, r + ":", cell_data);

        }
      }
    }
  }
}
