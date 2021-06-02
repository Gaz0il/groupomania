module.exports = (sequelize, Sequelize) => {
  const Liked = sequelize.define(
    "liked",
    {
      id_post: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      id_user: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  return Liked;
};
