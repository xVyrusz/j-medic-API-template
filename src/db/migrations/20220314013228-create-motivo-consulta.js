// 3
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('motivoConsulta', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                type: Sequelize.INTEGER
            },
            nameReason: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('motivoConsulta');
    }
};
