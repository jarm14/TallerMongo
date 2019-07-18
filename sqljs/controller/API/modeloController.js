const { createModel, findModeloById, findAllModelos } = require('../DB/modelo.db');
const { findMarcaById } = require('../DB/marca.db');

const getAllModelos = async(req, res) => {

    const foundModelos = await findAllModelos();
    res.status(200).json(foundModelos);
};


const postModelo = async(req, res) => {
    const modelo = req.body;

    const foundMarca = await findMarcaById(modelo.codeMarca);

    if (!foundMarca || foundMarca.length === 0) {
        res.status(404).json({ error: 'Marca not found' });
        return;
    }

    const createdModelo = await createModel(modelo);

    if (!createdModelo) {
        res.status(500).json({ error: "Problems to create modelo" });
        return;
    }

    res.status(200).json(createdModelo);
}

const getModeloById = async(req, res) => {

    const id = req.params.id;

    const foundModelo = await findModeloById(id);

    if (!foundModelo) {
        res.status(404).json({ error: "Modelo not found" });
        return;
    }
    res.status(200).json(foundModelo);
}


module.exports = {
    getAllModelos,
    postModelo,
    getModeloById
}