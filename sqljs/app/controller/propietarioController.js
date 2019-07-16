const PropietarioDao = require('../dao/propietarioDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Propietario entity */
const Propietario = require('../model/propietario');
class PropietarioController {

    constructor() {
        this.propietarioDao = new PropietarioDao();
        this.common = new ControllerCommon();
    }

    findById(req, res) {
        let cedula = req.params.cedula;

        this.propietarioDao.findById(cedula)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    findAll(res) {
        this.propietarioDao.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    create(req, res) {
        let propietario = new Propietario();
        if (req.body.cedula) {
            propietario.cedula = req.body.cedula;
        }
        propietario.cedula = req.body.cedula;
        propietario.nombre = req.body.nombre;
        propietario.fechaNacimiento = req.body.fechaNacimiento;

        if (req.body.cedula) {
            return this.propietarioDao.createWithId(propietario)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        } else {
            return this.propietarioDao.create(propietario)
                .then(this.common.editSuccess(res))
                .catch(this.common.serverError(res));
        }

    };
}

module.exports = PropietarioController;