const { Model, DataTypes } = require('sequelize');

class Serie extends Model {

    static init(sequelize) {
        super.init({
            //Chaves estrangeiras
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Works', key: 'imdb_code' },
                primaryKey: true
            },
            number_of_seasons: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            in_production: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
        }, {
            sequelize
        });
    }

}

module.exports = Serie;