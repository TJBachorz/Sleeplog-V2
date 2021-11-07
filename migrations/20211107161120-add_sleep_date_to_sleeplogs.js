'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Sleeplogs', 'sleepDate', { type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Sleeplogs', 'sleepDate', { type: Sequelize.STRING });
  }
};
