'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Films', {
      //Chaves estrangeiras
      fk_imdb_code_work: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Works', key: 'imdb_code' },
        primaryKey: true
      },
      overview: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      poster: {
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
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Films');
  }
};