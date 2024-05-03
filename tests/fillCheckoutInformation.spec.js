const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const { validUser } = require("./utils/data");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLogInPage();
  const userLoggedInPage = poManager.getUserLoggedInPage();
  const cartItemPage = poManager.getCartItemPage();

  await loginPage.toGo();
  await loginPage.enterUsernameAndPassword(
    validUser.username,
    validUser.password
  );
  await userLoggedInPage.addRandomItemToCart();
  await cartItemPage.clickCheckoutButton();
});

test("Fill all filed", async ({ page }) => {
  const poManager = new POManager(page);
  const checkoutInformationPage = poManager.getCheckoutInformationPage();

  await checkoutInformationPage.fillAllFiled();
  await expect(page).toHaveURL(/.*checkout-step-two/);
});

test("Do not fill any filed", async ({ page }) => {
  const poManager = new POManager(page);
  const checkoutInformationPage = poManager.getCheckoutInformationPage();

  await checkoutInformationPage.clickContinueButton();
  await expect(checkoutInformationPage.errorMessage).toHaveText(
    "Error: First Name is required"
  );
});

test("Should show an error message if firstName field it is empty", async ({
  page,
}) => {
  const poManager = new POManager(page);
  const checkoutInformationPage = poManager.getCheckoutInformationPage();

  await checkoutInformationPage.fillLastName();
  await checkoutInformationPage.fillpostalCode();
  await checkoutInformationPage.clickContinueButton();
  await expect(checkoutInformationPage.errorMessage).toHaveText(
    "Error: First Name is required"
  );
});

test("Should show an error message if lastName field it is empty", async ({
  page,
}) => {
  const poManager = new POManager(page);
  const checkoutInformationPage = poManager.getCheckoutInformationPage();

  await checkoutInformationPage.fillFirstName();
  await checkoutInformationPage.fillpostalCode();
  await checkoutInformationPage.clickContinueButton();
  await expect(checkoutInformationPage.errorMessage).toHaveText(
    "Error: Last Name is required"
  );
});

test("Should show an error message if postalCode field it is empty", async ({
  page,
}) => {
  const poManager = new POManager(page);
  const checkoutInformationPage = poManager.getCheckoutInformationPage();

  await checkoutInformationPage.fillFirstName();
  await checkoutInformationPage.fillLastName();
  await checkoutInformationPage.clickContinueButton();
  await expect(checkoutInformationPage.errorMessage).toHaveText(
    "Error: Postal Code is required"
  );
});
