const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');

sequelize.sync();

const Propietario = sequelize.define('Propietario', {
    dni: {
        type: Sequalize.STRING(10),
        allowNull: false,
        primaryKey: true,
        validate: {
            is: ["^[0-9]*$"]
        }
    },
    nombre: {
        type: Sequalize.STRING(100),
        allowNull: false
    },
    fecha: {
        type: Sequalize.DATE,
    }
});

module.exports = Propietario;