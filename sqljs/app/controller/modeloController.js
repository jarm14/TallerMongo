const ModeloDao = require('../dao/modeloDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Modelo entity */
const Modelo = require('../model/modelo');
class ModeloController {

    constructor() {
        this.modeloDao = new ModeloDao();
        this.common = new ControllerCommon();
    }

    findById(req, res) {
        let codigoMarca = req.params.codigoMarca;

        this.modeloDao.findById(codigoMarca)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.modeloDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let modelo = new Modelo();
        if (req.body.codigoMarca) {
            modelo.codigoMarca = req.body.codigoMarca;
        }
        modelo.codigoMarca = req.body.codigoMarca;
        modelo.nombre = req.body.nombre;

        if (req.body.codigoMarca) {
            return this.modeloDao.createWithId(modelo)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        } else {
            return this.modeloDao.create(modelo)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };
}

module.exports = ModeloController;