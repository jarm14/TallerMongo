const express = require('express')
const api = express.Router()

const { getAllMarcas, postMarca, getMarcaById } = require('../controller/API/marcaController');

api.route('')
    .get(getAllMarcas)
    .post(postMarca);

api.route('/:id')
    .get(getMarcaById);

module.exports = api;