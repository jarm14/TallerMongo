const MARCA = require('../DB/marca.db');
const MODELO = require('../DB/modelo.db');
const PROPIETARIO = require('../DB/propietario.db');
const VEHICULO = require('../DB/vehiculo.db');


const { vehiculos_Propietario_Age_Greater_Than } = require('../VALIDATORS/vehiculo.validators')

const postVehiculo = async(req, res) => {
    const vehiculo = req.body;
    const nameMarca = vehiculo.marca;
    const modelo = vehiculo.modelo;
    const dniPropietario = vehiculo.propietario;

    try {
        const foundPropietario = await PROPIETARIO.findPropietarioByDNI(dniPropietario);

        if (foundPropietario.length !== 1) {
            res.status(404).json({ err: "The propietario doesn't exist" });
            return;
        };

        const foundMarca = await MARCA.findMarcasByNombre(nameMarca);

        if (foundMarca.length !== 1) {
            res.status(404).json({ err: "The marca doesn't exist" });
            return;
        }

        vehiculo.marca = foundMarca[0].id;

        const foundModelo = await MODELO.findModeloByNombre(modelo);

        if (foundModelo.length !== 1) {
            res.status(404).json({ err: "The modelo doesn't exist" });
            return;
        }

        vehiculo.modelo = foundModelo[0].id;

        const createdVehiculo = await VEHICULO.createVehiculo(vehiculo);

        res.status(200).json({ newVehiculo: createdVehiculo });
    } catch (error) {
        res.status(500).json(error);
    }
}

const getAllVehiculos = async(req, res) => {

    const ageGreaterThan = req.query.ageGreaterThan || 0;

    const vehiculos = await VEHICULO.findAllVehiculos();

    const filteredVehiculos = vehiculos_Propietario_Age_Greater_Than(ageGreaterThan, vehiculos);

    res.status(200).json({ vehiculos: filteredVehiculos });
};

const getMarcaById = async(req, res) => {
    try {
        const id = req.params.id;
        const foundCar = await VEHICULO.findCarById(id);

        if (!foundCar) {
            res.status(404).json({ vehiculo: foundCar });
            return;
        }
        res.status(200).json({ vehiculo: foundCar });

    } catch (error) {
        res.status(500).json({ error });
    }
};

const changePropietario = async(req, res) => {
    const dniPropietario = req.body.dni;
    try {
        const id = req.params.id;
        const foundVehiculo = await VEHICULO.findVehiculoById(id);
        if (!foundVehiculo) {
            res.status(404).json({ vehiculo: foundVehiculo });
            return;
        }
        const changePropietario = await VEHICULO.changePropietario(id, dniPropietario);

        res.status(200).json({ vehiculo: changePropietario });

    } catch (error) {
        res.status(500).json({ error });
    }
};

const getAllVehiculosByMarcas = async(req, res) => {
    const nameMarca = req.params.nameMarca;

    const foundMarca = await MARCA.findMarcasByNombre(nameMarca);

    if (foundMarca.length === 0) {
        res.status(404).json({ err: "The marca doesn't exist" });
        return;
    }

    const foundVehiculo = await VEHICULO.findVehiculoByMarca(foundMarca[0].id);

    res.status(200).json({ vehiculo: foundVehiculo });
};

const getAllVehiculosByModelos = async(req, res) => {
    const nameModelo = req.params.nameModelo;

    const foundModelo = await MODELO.findModeloByNombre(nameModelo);

    if (foundModelo.length === 0) {
        res.status(404).json({ err: "The modelo doesn't exist" });
        return;
    }
    const foundVehiculo = await VEHICULO.findVehiculoByModelo(foundModelo[0].id);

    res.status(200).json({ vehiculo: foundVehiculo });
};


module.exports = {
    postVehiculo,
    getAllVehiculos,
    getMarcaById,
    changePropietario,
    getAllVehiculosByMarcas,
    getAllVehiculosByModelos
};