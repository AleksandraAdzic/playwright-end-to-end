const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const { validUser } = require("./utils/data");

test("Log out user", async ({ page }) => {
  const poManager = new POManager(page);
  const userLoggedInPage = poManager.getUserLoggedInPage();
  const loginPage = poManager.getLogInPage();

  await loginPage.toGo();
  await loginPage.enterUsernameAndPassword(
    validUser.username,
    validUser.password
  );

  await userLoggedInPage.logOutUser();
  await expect(page).toHaveURL("https://www.saucedemo.com/");
});
