// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'shopee',
//     password: 'password'
// });

// module.exports = pool.promise();

//sequelize
const Sequelize = require('sequelize');
const sequelize = new Sequelize('shopee', 'root', 'password', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;