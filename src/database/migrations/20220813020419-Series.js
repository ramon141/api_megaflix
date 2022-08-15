'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Series', {
      //Chaves estrangeiras
      fk_imdb_code_work: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Works', key: 'imdb_code' },
        primaryKey: true
      },
      number_of_seasons: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      in_production: {
        type: Sequelize.BOOLEAN,
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
    return await queryInterface.dropTable('Series');
  }
};