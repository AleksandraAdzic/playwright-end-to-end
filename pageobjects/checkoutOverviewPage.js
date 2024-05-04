class checkoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator("#finish");
  }
  async clickFinishButton() {
    await this.finishButton.click();
  }
}
module.exports = { checkoutOverviewPage };
