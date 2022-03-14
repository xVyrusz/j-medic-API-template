'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cita', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        unique: true,
        type: Sequelize.DATE
      },
      idPatient: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
              model: 'pacientes',
              key: 'id'
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cita');
  }
};