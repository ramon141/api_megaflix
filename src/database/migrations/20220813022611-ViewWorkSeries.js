'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
                CREATE VIEW WorkSeries AS
                SELECT
                    o.*,
                    s.number_of_seasons,
                    s.in_production
                FROM
                    Works AS o,
                    Series AS s
                WHERE
                    (o.imdb_code = s.fk_imdb_code_work);
    `);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`DROP VIEW  IF EXISTS WorkSeries;`);
  }
};
