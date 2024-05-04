class finishPage {
  constructor(page) {
    this.page = page;
    this.h2text = page.locator("h2");
  }
}
module.exports = { finishPage };
