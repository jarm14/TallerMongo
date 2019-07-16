/* Load Car entity */
const propietario = require('../model/propietario');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class propietarioDao {
    constructor() {
        this.common = new daoCommon();
    }

    findById(cedula) {
        let sqlRequest = "SELECT * FROM propietario WHERE cedula=$cedula";
        let sqlParams = { $cedula: cedula };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Propietario(row.cedula, row.nombre, row.fechaNacimiento));
    };


    findAll() {
        let sqlRequest = "SELECT * FROM propietario";
        return this.common.findAll(sqlRequest).then(rows => {
            let propietarios = [];
            for (const row of rows) {
                propietarios.push(new Propietario(row.cedula, row.nombre, row.fechaNacimiento));
            }
            return propietarios;
        });
    };

    create(Propietario) {
        let sqlRequest = "INSERT into propietario (cedula, nombre,fechaNacimiento) " +
            "VALUES ($cedula, $nombre,$fechaNacimiento)";
        let sqlParams = {
            $cedula: Propietario.cedula,
            $nombre: Propietario.nombre,
            $fechaNacimiento: Propietario.fechaNacimiento

        };
        return this.common.run(sqlRequest, sqlParams);
    };


    createWithId(Propietario) {
        let sqlRequest = "INSERT into propietario (cedula, nombre,fechaNacimiento) " +
            "VALUES ($cedula, $nombre,$fechaNacimiento)";
        let sqlParams = {
            $codigoMarca: Propietario.codigoMarca,
            $nombre: Propietario.nombre,
            $fechaNacimiento: Propietario.fechaNacimiento
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}