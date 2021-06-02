const db = require("../models");
const Users = db.users;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = (req, res, next) => {
  Users.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    createdAt: new Date(),
    updatedAt: new Date(),
  })
    .then(() => {
      res
        .send({ message: "User was registered successfully!" })
        .catch((error) => res.status(400).json({ error }));
    })

    .catch((error) => res.status(500).json({ error }));
};
exports.signin = (req, res, next) => {
  Users.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      var token = jwt.sign({ id: user.id }, "beaver", {
        expiresIn: 86400, // 24 hours
      });
      res.status(200).send({
        email: user.email,
        accessToken: token,
        admin: user.is_admin,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
