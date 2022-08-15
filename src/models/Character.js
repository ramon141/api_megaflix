const { Model, DataTypes } = require('sequelize');

class Character extends Model {

    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                autoIncrement: false,
                allowNull: false
            }
        }, {
            sequelize
        });
    }

}

module.exports = Character;