const { Model, DataTypes } = require('sequelize');

class Link extends Model {

    static init(sequelize) {
        super.init({
            link: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: false
            },
            resolution: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            language: {
                type: DataTypes.STRING,
                allowNull: false
            },

            //Chaves estrangeiras
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Works', key: 'imdb_code' },
                primaryKey: true
            },
            fk_id_episode: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'Episodes', key: 'id' },
                primaryKey: true
            },
        }, {
            sequelize
        });
    }

}

module.exports = Link;