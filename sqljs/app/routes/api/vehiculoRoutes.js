const express = require('express');
const router = express.Router();

/* Load controller */
const VehiculoController = require('../../controller/vehiculoController');
const vehiculoController = new VehiculoController();

router.get('/:placa', function(req, res) {
    vehiculoController.findById(req, res)
});

router.get('/', function(req, res) {
    vehiculoController.findAll(res);
});

router.put('/:placa', function(req, res) {
    vehiculoController.update(req, res)
});

router.post('/create', function(req, res) {
    vehiculoController.create(req, res);
});