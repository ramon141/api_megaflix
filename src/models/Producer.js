const { Model, DataTypes } = require('sequelize');

class Producer extends Model {

    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                autoIncrement: false,
                allowNull: false
            },
            logo: {
                type: DataTypes.DATE,
                allowNull: false
            },
        }, {
            sequelize
        });
    }

}

module.exports = Producer;