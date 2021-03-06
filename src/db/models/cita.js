'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class cita extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            cita.belongsTo(models.pacientes, {
                foreignKey: 'idPatient'
            });
        }
    }
    cita.init(
        {
            date: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'cita',
            timestamps: false
        }
    );
    return cita;
};
