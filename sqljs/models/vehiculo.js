const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');
const Marca = require('./marca');
const Modelo = require('./modelo');
const Propietario = require('./propietario')


sequelize.sync();

const Vehiculo = sequelize.define('Vehiculo', {
    placa: {
        type: Sequalize.STRING(8),
        allowNull: false,
        primaryKey: true
    },
    marca: {
        type: Sequalize.BIGINT(11),
        allowNull: false,
        reference: {
            model: Marca,
            key: 'id'
        }
    },
    modelo: {
        type: Sequalize.BIGINT(11),
        allowNull: false,
        reference: {
            model: Modelo,
            key: 'id'
        }
    },
    anio: {
        type: Sequalize.INTEGER(4),
        allowNull: false
    },
    transmision: {
        type: Sequalize.STRING(3),
        validate: {
            isIn: [
                ['MAN', 'AUT']
            ],
        }
    },
    propietario: {
        type: Sequalize.BIGINT(11),
        allowNull: false,
        reference: {
            model: Propietario,
            key: 'dni'
        }
    }
});

module.exports = Vehiculo;