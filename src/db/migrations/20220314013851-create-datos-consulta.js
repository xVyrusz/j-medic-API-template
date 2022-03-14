const { DataTypes } = require('sequelize');

('use strict');
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('datosConsulta', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                type: Sequelize.INTEGER
            },
            dateVisit: {
                allowNull: false,
                defaultValue: DataTypes.NOW,
                type: Sequelize.DATE
            },
            idDoctor: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'medicos',
                    key: 'id'
                }
            },
            idPatient: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'pacientes',
                    key: 'id'
                }
            },
            idReason: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'motivoConsulta',
                    key: 'id'
                }
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('datosConsulta');
    }
};
