'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pacientes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING
            },
            lastName: {
                type: Sequelize.STRING
            },
            gender: {
                type: Sequelize.STRING
            },
            weight: {
                type: Sequelize.FLOAT
            },
            height: {
                type: Sequelize.FLOAT
            },
            age: {
                type: Sequelize.INTEGER
            },
            phone: {
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pacientes');
    }
};
