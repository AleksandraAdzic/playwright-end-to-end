const validUser = {
    username: "standard_user",
    password: "secret_sauce",
  };

  const emptyFields = {
    username: "",
    password: "",
  }
  const wrongUsernameCorrectPassword = {
    username: "user",
    password: "secret_sauce",
  }
  const correctUsernameWrongPassword = {
    username: "standard_user",
    password: "wrongpassword",
  }

  module.exports = { validUser, emptyFields, wrongUsernameCorrectPassword, correctUsernameWrongPassword };
  