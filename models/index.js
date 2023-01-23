const User = require('./User');
const Water = require('./Water');

User.hasMany(Water, {
    foreignKey: 'user_id'
});

Water.belongsToMany(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Water };