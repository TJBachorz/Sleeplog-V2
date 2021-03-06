'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Sleeplogs', 'notes', { allowNull: true, type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Sleeplogs', 'notes', { allowNull: true, type: Sequelize.STRING });
  }
};
