const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const { validUser } = require("./utils/data");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLogInPage();
  await loginPage.toGo();
  await loginPage.enterUsernameAndPassword(
    validUser.username,
    validUser.password
  );
});

test.only("Add random item to cart", async ({ page }) => {
  const poManager = new POManager(page);
  const userLoggedInPage = poManager.getUserLoggedInPage();
  const cartItemPage = poManager.getCartItemPage();
  const productName = await userLoggedInPage.addRandomItemToCart();
  await expect(cartItemPage.nameOfItemInCart).toHaveText(productName);
});
