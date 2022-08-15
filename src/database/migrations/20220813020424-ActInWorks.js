'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('ActInWorks', {
      fk_imdb_code_work: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: false,
        references: { model: 'Works', key: 'imdb_code' },
        allowNull: false
      },
      fk_id_actor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        references: { model: 'Actors', key: 'id' },
        allowNull: false
      },
      fk_id_character: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        references: { model: 'Characters', key: 'id' },
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
    return await queryInterface.dropTable('ActInWorks');
  }
};