'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Works', {
      imdb_code: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      release_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      age_group: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      imdb_review: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },

    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Works');
  }
};