const moment = require('moment');


const isAgeGreaterThan = (vehiculo, anios) => {
    propietario = vehiculo.propietario;
    const agePropietario = moment().diff(propietario.fecha, 'anios');
    return agePropietario >= anios;
}

const vehiculos_Propietario_Age_Greater_Than = (edad, vehiculos) =>
    vehiculos.filter(vehiculo => isAgeGreaterThan(vehiculo, edad));

module.exports = {
    vehiculos_Propietario_Age_Greater_Than
}