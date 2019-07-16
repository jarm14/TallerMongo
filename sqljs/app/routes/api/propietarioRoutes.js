const express = require('express');
const router = express.Router();

const PropietarioController = require('../../controller/propietarioController');
const propietarioController = new PropietarioController();

router.post('/create', function(req, res) {
    propietarioController.create(req, res);
});
router.get('/:cedula', function(req, res) {
    propietarioController.findById(req, res);
});

router.get('/', function(req, res) {
    propietarioController.findAll(res);
});

module.exports = router;