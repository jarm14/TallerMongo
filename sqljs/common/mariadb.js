const dbconfig = require('../dbconfig');
const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    dbconfig.mariaDb.database,
    dbconfig.mariaDb.username,
    dbconfig.mariaDb.password, {
        host: dbconfig.mariaDb.host,
        dialect: 'mariadb'
    }
);

module.exports = sequelize;