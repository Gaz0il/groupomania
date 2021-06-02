const db = require("../models");
const Post = db.post;
const User = db.users;
const { Op } = require("sequelize");
const Liked = db.liked;

User.hasMany(Post, { foreignKey: "id_user" });
Post.belongsTo(User, { foreignKey: "id_user" });
Post.hasMany(Liked, { foreignKey: "id_post" });

exports.findAllOrderDate = (req, res, next) => {
  Post.findAll({
    include: [{ model: User, attributes: ["first_name", "last_name"] }],

    order: [["updatedAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.findByEmail = (req, res, next) => {
  Post.findAll({
    include: { model: User, where: { email: { [Op.eq]: req.body.email } } },
    order: [["updatedAt", "DESC"]],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.createPost = (req, res, next) => {
  Post.create({
    id_user: req.body.id_user,
    message: req.body.message,
    image: req.body.image,
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then(() => {
      res
        .send({ message: "Post was registered successfully!" })
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(500).json({ error }));
};
exports.deletePost = (req, res, next) => {
  Post.destroy({ where: { id: req.params.id } });

  return res.status(201).json({ message: "Post was delete successfully!" });
};
exports.updatePost = (req, res, next) => {
  Post.update(
    {
      message: req.body.message,
      image: req.body.image,
      updatedAt: Date.now(),
    },
    { where: { id: req.params.id } }
  )
    .then(() => {
      res
        .send({ message: "Post was modified successfully!" })
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(500).json({ error }));
};
