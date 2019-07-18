const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');
const Marca = require('./marca');

sequelize.sync();

const Modelo = sequelize.define('Modelo', {
    id: {
        type: Sequalize.BIGINT(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    codeMarca: {
        type: Sequalize.BIGINT(11),
        reference: {
            model: Marca,
            key: 'id'
        }
    },
    nombre: {
        type: Sequalize.STRING(100),
        allowNull: false
    }
});

module.exports = Modelo;