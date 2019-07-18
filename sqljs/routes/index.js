const brandApi = require('./marca');
const modelApi = require('./modelo');
const ownerApi = require('./propietario');
const carApi = require('./vehiculo');

const setRoutes = app => {
    app.use('/modelos', modelApi);
    app.use('/marcas', brandApi);
    app.use('/propietarios', ownerApi);
    app.use('/vehiculos', carApi);
};

module.exports = {
    setRoutes
}