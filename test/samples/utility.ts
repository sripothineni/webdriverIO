class Utility {

    async getSelectedOption(options: WebdriverIO.ElementArray): Promise<string[]> {
        const selectedTexts: string[] = [];

        for (const option of options) {
            if (await option.isSelected()) {
                selectedTexts.push(await option.getText());
                break;
            }
        }

        return selectedTexts;
    }
}

export default new Utility();