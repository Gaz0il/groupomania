module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      is_admin: {
        type: Sequelize.BOOLEAN,
      },
    },
    { freezeTableName: true }
  );

  return Users;
};
