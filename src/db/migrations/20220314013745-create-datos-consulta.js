'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('datosConsulta', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            dateVisit: {
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('datosConsulta');
    }
};
