const Sequalize = require('sequelize');
const sequelize = require('../common/mariadb');

sequelize.sync();

const Marca = sequelize.define('Marca', {
    id: {
        type: Sequalize.BIGINT(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: Sequalize.STRING(100),
        allowNull: false
    }
});


module.exports = Marca;