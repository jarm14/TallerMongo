/* Load marca entity */
const Vehiculo = require('../model/vehiculo');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');


class VehiculoDao {

    constructor() {
            this.common = new daoCommon();
        }
        //crear
    create(Vehiculo) {
        let sqlRequest = "INSERT into vehiculo (placa, modelo, marca,anio,transmision,motor,propietario) " +
            "VALUES ($placa, $modelo, $marca, $anio, $transmision, $motor, $propietario)";
        let sqlParams = {
            $placa: Vehiculo.placa,
            $modelo: Vehiculo.modelo,
            $marca: Vehiculo.marca,
            $anio: Vehiculo.anio,
            $transmision: Vehiculo.transmision,
            $motor: Vehiculo.motor,
            $propietario: Vehiculo.propietario
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    createWithId(Modelo) {
        let sqlRequest = "INSERT into vehiculo (placa, modelo, marca,anio,transmision,motor,propietario) " +
            "VALUES ($placa, $modelo, $marca, $anio, $transmision, $motor, $propietario)";
        let sqlParams = {
            $placa: Vehiculo.placa,
            $modelo: Vehiculo.modelo,
            $marca: Vehiculo.marca,
            $anio: Vehiculo.anio,
            $transmision: Vehiculo.transmision,
            $motor: Vehiculo.motor,
            $propietario: Vehiculo.propietario
        };
        return this.common.run(sqlRequest, sqlParams);
    };

    //cambiar de propietario
    update(Vehiculo) {
        let sqlRequest = "UPDATE vehiculo SET " +
            "propietario=$propietario " +
            "WHERE placa=$placa";

        let sqlParams = {
            $placa: Vehiculo.placa,
            $propietario: Vehiculo.propietario
        };
        return this.common.run(sqlRequest, sqlParams);
    };
    //obtener por placa
    findById(placa) {
        let sqlRequest = "SELECT placa, modelo, marca, anio, transmision, motor, propietario FROM vehiculo WHERE placa=$placa";
        let sqlParams = { $placa: placa };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Vehiculo(row.placa, row.modelo, row.marca, row.anio, row.transmision, row.motor, row.propietario));
    };
    //listar por modelo
    findByModelo(modelo) {
        let sqlRequest = "SELECT placa, modelo, marca, anio, transmision, motor, propietario FROM vehiculo WHERE modelo=$modelo";
        let sqlParams = { $modelo: modelo };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Vehiculo(row.placa, row.modelo, row.marca, row.anio, row.transmision, row.motor, row.propietario));
    };
    //listar por marca
    findByModelo(marca) {
        let sqlRequest = "SELECT placa, modelo, marca, anio, transmision, motor, propietario FROM vehiculo WHERE marca=$marca";
        let sqlParams = { $marca: marca };
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Vehiculo(row.placa, row.modelo, row.marca, row.anio, row.transmision, row.motor, row.propietario));
    };

}