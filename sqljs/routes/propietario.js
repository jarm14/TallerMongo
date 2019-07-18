const express = require('express')
const api = express.Router()

const { getAllPropietarios, postPropietario, getPropietarioByDNI } = require('../controller/API/propietarioController');

api.route('')
    .get(getAllPropietarios)
    .post(postPropietario);

api.route('/:dni')
    .get(getPropietarioByDNI);



module.exports = api;