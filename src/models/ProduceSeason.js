const { Model, DataTypes } = require('sequelize');

class ProduceSeason extends Model {

    static init(sequelize) {
        super.init({
            //Chaves estrangeiras
            fk_imdb_code_work: {
                type: DataTypes.STRING,
                allowNull: false,
                references: { model: 'Works', key: 'imdb_code' },
                primaryKey: true
            },
            fk_id_producer: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'Producers', key: 'id' },
                primaryKey: true
            },
        }, {
            sequelize
        });
    }

}

module.exports = ProduceSeason;