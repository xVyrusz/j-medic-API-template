'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('consulta', {
            testMade: {
                allowNull: false,
                type: Sequelize.STRING
            },
            diagnosis: {
                allowNull: false,
                type: Sequelize.STRING
            },
            tratamiento: {
                allowNull: false,
                type: Sequelize.STRING
            },
            idTest: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'datosConsulta',
                    key: 'id'
                }
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('consulta');
    }
};
