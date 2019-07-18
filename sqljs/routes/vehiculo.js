const express = require('express');
const api = express.Router();

const {
    postVehiculo,
    getAllVehiculos,
    getMarcaById,
    changePropietario,
    getAllVehiculosByMarcas,
    getAllVehiculosByModelos
} = require('../controller/API/vehiculoController');

api.route('')
    .post(postVehiculo)
    .get(getAllVehiculos);

api.route('/:id')
    .get(getMarcaById)
    .put(changePropietario);


api.route('/brands/:nameMarca')
    .get(getAllVehiculosByMarcas);

api.route('/models/:nameModelo')
    .get(getAllVehiculosByModelos);

module.exports = api;