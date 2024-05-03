class userLoggedInPage {
  constructor(page) {
    this.page = page;
    this.textOnPage = page.getByText("Products");
    this.buttonAddToCartBackpack = page.locator(
      "#add-to-cart-sauce-labs-backpack"
    );
    this.shoppingCartLink = page.locator(".shopping_cart_link");
    this.boxOfProduct = page.locator(".inventory_item_description");
  }

  async addToCartItemBackpack() {
    await this.buttonAddToCartBackpack.click();
  }

  async clickOnShoppingCartLink() {
    await this.shoppingCartLink.click();
  }

  async addToCartAndClickOnCartLink() {
    await this.addToCartItemBackpack();
    await this.clickOnShoppingCartLink();
  }

  async addRandumItemToCart() {
    const products = await this.boxOfProduct.all();
    const num = products.length;
    const randumNum = Math.floor(Math.random() * num);
    const product = products[randumNum];
    const nameOfProduct = await product
      .locator(".inventory_item_name ")
      .textContent();
    await product.getByRole("button").click();
    await this.clickOnShoppingCartLink();
    return nameOfProduct;
  }
}
module.exports = { userLoggedInPage };
