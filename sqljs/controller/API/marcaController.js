const { createMarca, findAllMarcas, findMarcaById } = require('../DB/marca.db');

const getAllMarcas = async(req, res) => {
    try {
        const foundAllMarcas = await findAllMarcas();
        res.status(200).json({ marcas: foundAllMarcas });
    } catch (error) {
        res.status(500).json({ error });
    }
};

const postMarca = async(req, res) => {
    try {
        const marca = req.body;
        const createdMarca = await createMarca(marca);
        res.status(200).json({ newMarca: createdMarca });
    } catch (error) {
        res.status(500).json({ error });
    }
};

const getMarcaById = async(req, res) => {
    try {
        const id = req.params.id;
        const foundMarca = await findMarcaById(id);

        if (!foundMarca) {
            res.status(404).json({ marca: foundMarca });
            return;
        }
        res.status(200).json({ marca: foundMarca });

    } catch (error) {
        res.status(500).json({ error });
    }
};

module.exports = {
    postMarca,
    getAllMarcas,
    getMarcaById
}