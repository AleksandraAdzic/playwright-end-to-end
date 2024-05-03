const { logInPage } = require("./logInPage");
const { userLoggedInPage } = require("./userLoggedInPage");
const { cartItemPage } = require("./cartItemPage");
const { checkoutInformationPage } = require("./checkoutInformationPage");

class POManager {
  constructor(page) {
    this.page = page;
    this.loginPage = new logInPage(page);
    this.userLoggedInPage = new userLoggedInPage(page);
    this.cartItemPage = new cartItemPage(page);
    this.checkoutInformationPage = new checkoutInformationPage(page);
  }

  getCheckoutInformationPage() {
    return this.checkoutInformationPage;
  }

  getCartItemPage() {
    return this.cartItemPage;
  }

  getUserLoggedInPage() {
    return this.userLoggedInPage;
  }

  getLogInPage() {
    return this.loginPage;
  }
}

module.exports = { POManager };
