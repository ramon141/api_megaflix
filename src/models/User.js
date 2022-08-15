const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

class User extends Model {

    static init(sequelize) {
        super.init({
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
                autoIncrement: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            hooks: {
                beforeSave: async user => {
                    if (user.password)
                        user.password = await bcrypt.hash(user.password, 8);
                }
            }
        });
    }

    static validPassword(password1, password2) {
        return bcrypt.compare(password1, password2);
    }
}

module.exports = User;