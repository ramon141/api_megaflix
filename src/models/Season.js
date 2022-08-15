const { Model, DataTypes } = require('sequelize');

class Season extends Model {

    static init(sequelize) {
        super.init({
            season_number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            season_name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            trailer: {
                type: DataTypes.STRING,
                allowNull: false
            },
            overview: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            poster: {
                type: DataTypes.STRING,
                allowNull: false
            },
            //Chaves estrangeiras
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Works', key: 'imdb_code' }
            },
        }, {
            sequelize
        });
    }

}

module.exports = Season;