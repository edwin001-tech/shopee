const Sequelize = require('sequelize');
const sequelize = ('../util/database');

const User = sequelize.define('user', {
    id: {
        type: sequelize.INTEGER,
        autoIncreament: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = User;