const { createPropietario, findPropietarioByDNI, findAllPropietarios } = require('../DB/propietario.db');

const getAllPropietarios = async(req, res) => {

    const foundPropietarios = await findAllPropietarios();
    res.status(200).json(foundPropietarios);
};


const postPropietario = async(req, res) => {
    const propietario = req.body;

    try {
        const createdPropietario = await createPropietario(propietario);
        res.status(200).json(createdPropietario);
    } catch (error) {
        res.status(400).json(error);
    }
}

const getPropietarioByDNI = async(req, res) => {

    const dni = req.params.dni;

    const foundPropietario = await findPropietarioByDNI(dni);

    if (!foundPropietario || foundPropietario.length === 0) {
        res.status(404).json({ error: "Propietario not found" });
        return;
    }
    res.status(200).json(foundPropietario);
}


module.exports = {
    getAllPropietarios,
    getPropietarioByDNI,
    postPropietario
}