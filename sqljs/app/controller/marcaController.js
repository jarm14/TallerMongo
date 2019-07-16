const MarcaDao = require('../dao/marcaDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Marca entity */
const Marca = require('../model/marca');
class MarcaController {

    constructor() {
        this.marcaDao = new MarcaDao();
        this.common = new ControllerCommon();
    }

    findById(req, res) {
        let codigo = req.params.codigo;

        this.marcaDao.findById(codigo)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.marcaDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let marca = new Marca();
        if (req.body.codigoMarca) {
            marca.codigoMarca = req.body.codigoMarca;
        }
        marca.codigoMarca = req.body.codigoMarca;
        marca.nombre = req.body.nombre;

        if (req.body.codigoMarca) {
            return this.marcaDao.createWithId(marca)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        } else {
            return this.marcaDao.create(marca)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };
}

module.exports = MarcaController;