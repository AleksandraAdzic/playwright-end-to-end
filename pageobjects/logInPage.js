class logInPage {
  constructor(page) {
    this.page = page;
    this.username = page.locator("#user-name");
    this.password = page.locator("#password");
    this.logInButton = page.locator("#login-button");
    this.errorMessage = page.locator("h3");
  }

  async toGo() {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterUsername(username) {
    await this.username.fill(username);
  }

  async enterPassword(password) {
    await this.password.fill(password);
  }

  async pressLogInButton() {
    await this.logInButton.click();
  }

  async enterUsernameAndPassword(username, password) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.pressLogInButton();
  }
}
module.exports = { logInPage };
