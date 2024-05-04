class userLoggedInPage {
  constructor(page) {
    this.page = page;
    this.textOnPage = page.getByText("Products");
    this.shoppingCartLink = page.locator(".shopping_cart_link");
    this.boxOfProduct = page.locator(".inventory_item_description");
    this.checkoutButton = page.locator("#checkout");
    this.buttonBurgerMenu = page.locator("#react-burger-menu-btn");
    this.logoutButton = page.locator("#logout_sidebar_link");
  }

  async clickBurgerMenu() {
    await this.buttonBurgerMenu.click();
  }

  async clickLogoutButton() {
    await this.logoutButton.click();
  }

  async logOutUser() {
    await this.clickBurgerMenu();
    await this.clickLogoutButton();
  }
  async clickOnShoppingCartLink() {
    await this.shoppingCartLink.click();
  }

  async addRandomItemToCart() {
    const products = await this.boxOfProduct.all();
    const num = products.length;
    const randomNum = Math.floor(Math.random() * num);
    const product = products[randomNum];
    const nameOfProduct = await product
      .locator(".inventory_item_name ")
      .textContent();
    await product.getByRole("button").click();
    await this.clickOnShoppingCartLink();
    return nameOfProduct;
  }
}
module.exports = { userLoggedInPage };
