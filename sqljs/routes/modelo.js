    const express = require('express')
    const api = express.Router()

    const { getAllModelos, postModelo, getModeloById } = require('../controller/API/modeloController');

    api.route('')
        .get(getAllModelos)
        .post(postModelo);

    api.route('/:id')
        .get(getModeloById)



    module.exports = api;