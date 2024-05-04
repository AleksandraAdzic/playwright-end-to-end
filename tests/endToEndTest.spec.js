const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const { validUser } = require("./utils/data");

test.only("End to end test", async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLogInPage();
  const userLoggedInPage = poManager.getUserLoggedInPage();
  const cartItemPage = poManager.getCartItemPage();
  const checkoutInformationPage = poManager.getCheckoutInformationPage();
  const checkoutOverviewPage = poManager.getCheckoutOverviewPage();
  const finishPage = poManager.getFinishPage();

  await loginPage.toGo();
  await loginPage.enterUsernameAndPassword(
    validUser.username,
    validUser.password
  );

  await userLoggedInPage.addRandomItemToCart();
  await cartItemPage.clickCheckoutButton();
  await checkoutInformationPage.fillAllFiled();
  await checkoutOverviewPage.clickFinishButton();

  await expect(page).toHaveURL(/.*checkout-complete/);
  await expect(finishPage.h2text).toHaveText("Thank you for your order!");
});
