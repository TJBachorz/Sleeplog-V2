'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sleeplog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sleeplog.init({
    userId: DataTypes.INTEGER,
    bedtime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sleeplog',
  });
  return Sleeplog;
};