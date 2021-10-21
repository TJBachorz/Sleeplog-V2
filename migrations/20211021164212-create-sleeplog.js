'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sleeplogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nightOfDate: {
        type: Sequelize.STRING
      },
      bedtime: {
        type: Sequelize.STRING
      },
      approximateSleepTime: {
        type: Sequelize.STRING
      },
      sleepInterrupted: {
        type: Sequelize.INTEGER
      },
      wakeUpTime: {
        type: Sequelize.STRING
      },
      ateSpicy: {
        type: Sequelize.BOOLEAN
      },
      drankAlcohol: {
        type: Sequelize.BOOLEAN
      },
      sleepMeds: {
        type: Sequelize.BOOLEAN
      },
      hoursSlept: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sleeplogs');
  }
};