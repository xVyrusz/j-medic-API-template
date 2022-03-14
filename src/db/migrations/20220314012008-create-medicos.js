'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('medicos', {
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
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            license: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('medicos');
    }
};
