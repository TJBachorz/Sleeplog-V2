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
        allowNull: false,
        type: Sequelize.STRING
      },
      bedtime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      approximateSleepTime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sleepInterrupted: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      sleepLostFromInterruptions: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      wakeUpTime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ateSpicy: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      drankAlcohol: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      sleepMeds: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        }
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