const express = require('express');
const router = express.Router();

const MarcaController = require('../../controller/marcaController');
const marcaController = new MarcaController();

router.post('/create', function(req, res) {
    marcaController.create(req, res);
});
router.get('/:codigo', function(req, res) {
    marcaController.findById(req, res);
});

router.get('/', function(req, res) {
    marcaController.findAll(res);
});

module.exports = router;