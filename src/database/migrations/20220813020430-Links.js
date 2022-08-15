'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('Links', {
      link: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      resolution: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      language: {
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
        references: { model: 'Works', key: 'imdb_code' },
        primaryKey: true
      },
      fk_id_episode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Episodes', key: 'id' },
        primaryKey: true
      },

    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('Links');
  }
};