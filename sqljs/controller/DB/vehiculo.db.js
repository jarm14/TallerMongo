const CAR = require('../../models/vehiculo');


const createVehiculo = async(vehiculo) => {
    const resposedCreatedVehiculo = await CAR.create(vehiculo);
    return resposedCreatedVehiculo;
};

const findAllVehiculos = async() => CAR.findAll();

const findVehiculoById = async(placa) =>
    CAR.findAll({
        where: { placa }
    });

const findVehiculoByMarca = async(marca) =>
    CAR.findAll({
        where: { marca }
    });

const findVehiculoByModelo = async(modelo) =>
    CAR.findAll({
        where: { modelo }
    });
const changePropietario = async(placa, propietario) =>
    CAR.update({
        owner: { propietario },
        where: { placa }
    });
module.exports = {
    createVehiculo,
    findAllVehiculos,
    findVehiculoById,
    findVehiculoByModelo,
    findVehiculoByMarca,
    changePropietario
};