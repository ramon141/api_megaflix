'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
                CREATE VIEW WorkFilms AS
                SELECT
                    o.*,
                    f.overview,
                    f.poster,
                    f.duration_in_minutes
                FROM
                    Works AS o,
                    Films AS f
                WHERE
                    (o.imdb_code = f.fk_imdb_code_work);
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`DROP VIEW  IF EXISTS WorkFilms;`);
  }
};
