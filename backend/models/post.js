const users = require("./users");

module.exports = (sequelize, Sequelize) => {
  const Post = sequelize.define(
    "post",
    {
      id_user: {
        type: Sequelize.INTEGER,
      },
      message: {
        type: Sequelize.STRING,
      },
      image: {
        type: Sequelize.STRING,
      },
    },
    { freezeTableName: true }
  );

  return Post;
};
