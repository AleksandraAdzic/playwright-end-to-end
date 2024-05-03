const { faker } = require("@faker-js/faker");

class checkoutInformationPage {
  constructor(page) {
    this.page = page;
    this.inputFirstName = page.locator("#first-name");
    this.inputLastName = page.locator("#last-name");
    this.inputPostalCode = page.locator("#postal-code");
    this.continueButton = page.locator("#continue");
    this.errorMessage = page.locator("h3");
  }

  async fillFirstName() {
    const firstName = faker.person.firstName();
    await this.inputFirstName.fill(firstName);
  }

  async fillLastName() {
    const lastName = faker.person.lastName();
    await this.inputLastName.fill(lastName);
  }

  async fillpostalCode() {
    const postalCode = faker.location.zipCode();
    await this.inputPostalCode.fill(postalCode);
  }
  async clickContinueButton() {
    await this.continueButton.click();
  }

  async fillAllFiled() {
    await this.fillFirstName();
    await this.fillLastName();
    await this.fillpostalCode();
    await this.clickContinueButton();
  }
}
module.exports = { checkoutInformationPage };
