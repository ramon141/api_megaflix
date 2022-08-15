const { Model, DataTypes } = require('sequelize');

class FavoriteWork extends Model {

    static init(sequelize) {
        super.init({
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
            },
        }, {
            sequelize
        });
    }

}

module.exports = FavoriteWork;