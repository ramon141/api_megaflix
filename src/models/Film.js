const { Model, DataTypes } = require('sequelize');

class Film extends Model {

    static init(sequelize) {
        super.init({
            //Chaves estrangeiras
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Works', key: 'imdb_code' },
                primaryKey: true
            },
            overview: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            poster: {
                type: DataTypes.STRING,
                allowNull: false
            },
            duration_in_minutes: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
        }, {
            sequelize
        });
    }

}

module.exports = Film;