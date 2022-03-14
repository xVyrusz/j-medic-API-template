'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('motivoConsulta', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nameReason: {
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('motivoConsulta');
    }
};
