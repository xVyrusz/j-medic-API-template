'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class motivoConsulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  motivoConsulta.init({
    nameReason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'motivoConsulta',
    timestamps: false
  });
  return motivoConsulta;
};