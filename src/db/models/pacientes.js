'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class pacientes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            pacientes.belongsTo(models.tipoSangres, 
                {
                    foreignKey: 'idBlood',
                }
            );
        }
    }
    pacientes.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            gender: DataTypes.STRING,
            weight: DataTypes.FLOAT,
            height: DataTypes.FLOAT,
            age: DataTypes.INTEGER,
            phone: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'pacientes'
        }
    );
    return pacientes;
};
