const { Model, DataTypes } = require('sequelize');

class WatchWork extends Model {

    static init(sequelize) {
        super.init({
            current_state: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: true
            },

            //Chaves estrangeiras
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Works', key: 'imdb_code' },
                primaryKey: true
            },
            fk_email_user: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Users', key: 'email' },
                primaryKey: true
            }
        }, {
            sequelize
        });
    }

}

module.exports = WatchWork;