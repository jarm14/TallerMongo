const express = require('express');
const router = express.Router();

const ModeloController = require('../../controller/modeloController');
const modeloController = new ModeloController();

router.post('/create', function(req, res) {
    modeloController.create(req, res);
});
router.get('/:codigoMarca', function(req, res) {
    modeloController.findById(req, res);
});

router.get('/', function(req, res) {
    modeloController.findAll(res);
});

module.exports = router;