/* Load Marca entity */
const marca = require('../model/marca');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Marca Data Access Object
 */
class marcaDao {
    constructor() {
        this.common = new daoCommon();
    }

    findById(codigo) {
        let sqlRequest = "SELECT * FROM marca WHERE codigo=$codigo";
        let sqlParams = { $codigo: codigo };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Marca(row.codigo, row.nombre));
    };


    findAll() {
        let sqlRequest = "SELECT * FROM marca";
        return this.common.findAll(sqlRequest).then(rows => {
            let marcas = [];
            for (const row of rows) {
                marcas.push(new Marca(row.codigo, row.nombre));
            }
            return marcas;
        });
    };

    create(Marca) {
        let sqlRequest = "INSERT into marca (codigo, nombre) " +
            "VALUES ($codigo, $nombre)";
        let sqlParams = {
            $codigo: Marca.codigo,
            $nombre: Marca.nombre
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    createWithId(Marca) {
        let sqlRequest = "INSERT into marca (codigo, nombre) " +
            "VALUES ($codigo, $nombre)";
        let sqlParams = {
            $codigo: Marca.codigo,
            $nombre: Marca.nombre,
        };
        return this.common.run(sqlRequest, sqlParams);
    };
}