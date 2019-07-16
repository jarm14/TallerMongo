const express = require('express');
const router = express.Router();

/* API routes */
router.use('/modelo', require('./api/modeloRoutes'));
router.use('/marca', require('./api/marcaRoutes'));
router.use('/propietario', require('./api/propietarioRoutes'));
router.use('/vehiculo', require('./api/vehiculoRoutes'));

module.exports = router;