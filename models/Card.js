const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Model {}

Card.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        card_type: {
            type: DataTypes.string,
            allowNull: false,
            validate: {
                isIn: [[['MasterCard', 'VISA', 'American Express']]],
                msg: 'Must be one of the three card types'
            }
        },
        credit_card_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            validate: {
                isCreditCard: true
            }
        },
        cc_expiration_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true
            }
        },
        cc_code: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [3]
            }
        },
        address_one: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address_two: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [5]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'card'
    }
);

module.exports = Card;