module.exports = (app) => {
  var router = require("express").Router();
  const liked = require("../controllers/liked");
  const auth = require("../middleware/auth");

  router.get("/:id", auth, liked.countById);
  router.post("/", auth, liked.addLike);
  router.delete("/", auth, liked.substractLike);

  app.use("/liked", router);
};
