class cartItemPage {
  constructor(page) {
    this.page = page;
    this.nameOfItemInCart = page.locator(".inventory_item_name");
    this.checkoutButton = page.getByRole("button", { name: "Checkout" });
  }

  async clickCheckoutButton() {
    await this.checkoutButton.click();
  }
}
module.exports = { cartItemPage };
