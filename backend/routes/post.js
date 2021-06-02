module.exports = (app) => {
  var router = require("express").Router();
  const post = require("../controllers/post");
  const multer = require("../middleware/multer-config");
  const auth = require("../middleware/auth");

  router.get("/" /*, auth,*/, post.findAllOrderDate);
  router.get("/email" /*, auth,*/, post.findByEmail);
  router.post("/" /*, auth,*/, multer, post.createPost);
  router.delete("/:id" /*, auth,*/, post.deletePost);
  router.put("/:id" /*, auth,*/, multer, post.updatePost);

  app.use("/post", router);
};
