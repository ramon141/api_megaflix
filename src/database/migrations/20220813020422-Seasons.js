'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Seasons', {
      //Chaves estrangeiras
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      season_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      season_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      trailer: {
        type: Sequelize.STRING,
        allowNull: false
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      poster: {
        type: Sequelize.STRING,
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
      //Chaves estrangeiras
      fk_imdb_code_work: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Works', key: 'imdb_code' }
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Seasons');
  }
};