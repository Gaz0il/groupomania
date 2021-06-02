module.exports = (app) => {
  const users = require("../controllers/users.js");
  var router = require("express").Router();
  const passwordValidator = require("../middleware/validPassword");

  router.post("/signup", passwordValidator, users.signup);
  router.get("/signin", users.signin);

  app.use("/users", router);
};
