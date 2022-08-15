const { Model, DataTypes } = require('sequelize');

class Episode extends Model {

    static init(sequelize) {
        super.init({
            episode_number: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            overview: {
                type: DataTypes.TEXT,
            },
            poster: {
                type: DataTypes.STRING
            },
            episode_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            duration_in_minutes: {
                type: DataTypes.INTEGER,
                allowNull: false
            },

            //Chaves estrangeiras
            fk_id_season: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'Seasons', key: 'id' }
            },
        }, {
            sequelize
        });
    }

}

module.exports = Episode;