const { Model, DataTypes } = require('sequelize');

class Work extends Model {

    static init(sequelize) {
        super.init({
            imdb_code: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            release_year: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            age_group: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            imdb_review: {
                type: DataTypes.DOUBLE,
                allowNull: false
            },
        }, {
            sequelize
        });
    }

}

module.exports = Work;