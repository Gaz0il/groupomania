const db = require("../models");
const Liked = db.liked;
const { Op } = require("sequelize");

exports.countById = (req, res, next) => {
  Liked.count({
    where: {
      id_post: { [Op.eq]: req.params.id },
    },
  })
    .then((count) => res.send({ count }))
    .catch((error) => res.status(500).json({ error }));
};
exports.addLike = (req, res, next) => {
  Liked.create({
    id_post: req.body.id_post,
    id_user: req.body.id_user,
  })
    .then(() => {
      res
        .send({ message: "liked!" })
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(500).json({ error }));
};
exports.substractLike = (req, res, next) => {
  Liked.destroy({
    where: { id_post: req.body.id_post, id_user: req.body.id_user },
  });

  return res.status(201).json({ message: "Post was delete successfully!" });
};
