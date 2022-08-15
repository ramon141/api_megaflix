'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('ProduceSeasons', {
      //Chaves estrangeiras
      fk_imdb_code_work: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Works', key: 'imdb_code' },
        primaryKey: true
      },
      fk_id_producer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Producers', key: 'id' },
        primaryKey: true
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
    return await queryInterface.dropTable('ProduceSeasons');
  }
};