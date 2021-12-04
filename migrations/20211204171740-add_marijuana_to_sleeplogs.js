'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Sleeplogs', 'useMarijuana', { type: Sequelize.BOOLEAN });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Sleeplogs', 'useMarijuana', { type: Sequelize.BOOLEAN });
  }
};
