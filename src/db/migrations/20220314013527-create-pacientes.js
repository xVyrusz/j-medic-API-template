// 4
'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('pacientes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            lastName: {
                allowNull: false,
                type: Sequelize.STRING
            },
            gender: {
                allowNull: false,
                type: Sequelize.STRING
            },
            weight: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            height: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            age: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING
            },
            idBlood: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'tipoSangre',
                    key: 'id'
                }
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('pacientes');
    }
};
