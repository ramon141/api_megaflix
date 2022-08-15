const { Model, DataTypes } = require('sequelize');

class ActInWork extends Model {

    static init(sequelize) {
        super.init({
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                primaryKey: true,
                autoIncrement: false,
                references: { model: 'Works', key: 'imdb_code' },
                allowNull: false
            },
            fk_id_actor: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: false,
                references: { model: 'Actors', key: 'id' },
                allowNull: false
            },
            fk_id_character: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: false,
                references: { model: 'Characters', key: 'id' },
                allowNull: false
            },
        }, {
            sequelize
        });
    }

}

module.exports = ActInWork;