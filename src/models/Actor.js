const { Model, DataTypes } = require('sequelize');

class Actor extends Model {

    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            picture: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            sequelize
        });
    }

}

module.exports = Actor;