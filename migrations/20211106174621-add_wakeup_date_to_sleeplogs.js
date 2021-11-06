'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Sleeplogs', 'wakeUpDate', { type: Sequelize.STRING });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Sleeplogs', 'wakeUpDate', { type: Sequelize.STRING });
  }
};
