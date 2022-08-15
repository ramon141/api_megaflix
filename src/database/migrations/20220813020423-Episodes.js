'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Episodes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      episode_number: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      overview: {
        type: Sequelize.TEXT,
      },
      poster: {
        type: Sequelize.STRING
      },
      episode_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      duration_in_minutes: {
        type: Sequelize.INTEGER,
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
      fk_id_season: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Seasons', key: 'id' }
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Episodes');
  }
};