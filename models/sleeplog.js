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
    nightOfDate: DataTypes.STRING,
    bedtime: DataTypes.STRING,
    sleepDate: DataTypes.STRING,
    approximateSleepTime: DataTypes.STRING,
    sleepInterrupted: DataTypes.INTEGER,
    sleepLostFromInterruptions: DataTypes.DECIMAL(10,2),
    wakeUpDate: DataTypes.STRING,
    wakeUpTime: DataTypes.STRING,
    ateSpicy: DataTypes.BOOLEAN,
    drankAlcohol: DataTypes.BOOLEAN,
    sleepMeds: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    points: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'Sleeplog',
  });
  Sleeplog.associate = function(models) {
    Sleeplog.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    })
  };
  return Sleeplog;
};