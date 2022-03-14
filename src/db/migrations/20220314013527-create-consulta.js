'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consulta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      testMade: {
        type: Sequelize.STRING
      },
      diagnosis: {
        type: Sequelize.STRING
      },
      tratamiento: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('consulta');
  }
};