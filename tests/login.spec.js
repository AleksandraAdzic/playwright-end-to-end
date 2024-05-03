const { test, expect } = require("@playwright/test");
const { POManager } = require("../pageobjects/POManager");
const {
  validUser,
  emptyFields,
  wrongUsernameCorrectPassword,
  correctUsernameWrongPassword,
} = require("./utils/data");

test.beforeEach(async ({ page }) => {
  const poManager = new POManager(page);
  const loginPage = poManager.getLogInPage();
  await loginPage.toGo();
});

test("Enter valid username and password", async ({ page }) => {
  const poManager = new POManager(page);
  const logInPage = poManager.getLogInPage();
  const userLoggedInPage = poManager.getUserLoggedInPage();

  await logInPage.enterUsernameAndPassword(
    validUser.username,
    validUser.password
  );
  await expect(userLoggedInPage.textOnPage).toBeVisible();
});

test("Enter empty username and password", async ({ page }) => {
  const poManager = new POManager(page);
  const logInPage = poManager.getLogInPage();

  await logInPage.enterUsernameAndPassword(
    emptyFields.username,
    emptyFields.password
  );

  await expect(logInPage.errorMessage).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Enter wrong username and correct password", async ({ page }) => {
  const poManager = new POManager(page);
  const logInPage = poManager.getLogInPage();

  await logInPage.enterUsernameAndPassword(
    wrongUsernameCorrectPassword.username,
    wrongUsernameCorrectPassword.password
  );

  await expect(logInPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("Enter valid username and wrong password", async ({ page }) => {
  const poManager = new POManager(page);
  const logInPage = poManager.getLogInPage();

  await logInPage.enterUsernameAndPassword(
    correctUsernameWrongPassword.username,
    correctUsernameWrongPassword.password
  );

  await expect(logInPage.errorMessage).toHaveText(
    "Epic sadface: Username and password do not match any user in this service"
  );
});

test("Enter empty username and valid password", async ({ page }) => {
  const poManager = new POManager(page);
  const logInPage = poManager.getLogInPage();

  await logInPage.enterUsernameAndPassword(
    emptyFields.username,
    validUser.password
  );

  await expect(logInPage.errorMessage).toHaveText(
    "Epic sadface: Username is required"
  );
});

test("Enter valid username and empty password", async ({ page }) => {
  const poManager = new POManager(page);
  const logInPage = poManager.getLogInPage();

  await logInPage.enterUsernameAndPassword(
    validUser.username,
    emptyFields.password
  );

  await expect(logInPage.errorMessage).toHaveText("Epic sadface: Password is required");
});
