"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        first_name: "John",
        last_name: "Doe",
        email: "example@example.com",
        password: "Azerty1234",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("liked", [
      {
        id_post: 1,
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("post", [
      {
        message: "WelcomeBAck",
        id_user: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
};
