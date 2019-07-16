/* Load Car entity */
const modelo = require('../model/modelo');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class modeloDao {
    constructor() {
        this.common = new daoCommon();
    }

    findById(codigoMarca) {
        let sqlRequest = "SELECT * FROM modelo WHERE codigoMarca=$codigoMarca";
        let sqlParams = { $id: codigoMarca };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Modelo(row.codigoMarca, row.nombre));
    };


    findAll() {
        let sqlRequest = "SELECT * FROM modelo";
        return this.common.findAll(sqlRequest).then(rows => {
            let modelos = [];
            for (const row of rows) {
                modelos.push(new Modelo(row.codigoMarca, row.nombre));
            }
            return modelos;
        });
    };

    create(Modelo) {
        let sqlRequest = "INSERT into modelo (codigoMarca, nombre) " +
            "VALUES ($codigoMarca, $nombre)";
        let sqlParams = {
            $codigoMarca: Modelo.codigoMarca,
            $nombre: Modelo.nombre
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    createWithId(Modelo) {
        let sqlRequest = "INSERT into modelo (codigoMarca, nombre) " +
            "VALUES ($codigoMarca, $nombre)";
        let sqlParams = {
            $codigoMarca: Modelo.codigoMarca,
            $nombre: Modelo.nombre,
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}