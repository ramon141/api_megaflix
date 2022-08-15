'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable('WatchWorks', {
      current_state: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
        defaultValue: Sequelize.NOW
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
      fk_email_user: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'Users', key: 'email' },
        primaryKey: true
      }
    });
  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('WatchWorks');
  }
};