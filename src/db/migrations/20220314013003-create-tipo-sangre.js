// 2
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('tipoSangre', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                type: Sequelize.INTEGER
            },
            nameBlood: {
                allowNull: false,
                type: Sequelize.STRING
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('tipoSangre');
    }
};
