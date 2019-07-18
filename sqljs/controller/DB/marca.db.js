const BRAND = require('../../models/marca');


const createMarca = async(marca) => {
    const resposeCreatedMarca = await BRAND.create(marca);
    return resposeCreatedMarca;
};

const findMarcaById = async(id) =>
    BRAND.findAll({
        where: { id }
    });

const findMarcasByNombre = async(nombre) =>
    BRAND.findAll({
        where: { nombre }
    });

const findAllMarcas = async() => BRAND.findAll();

module.exports = {
    createMarca,
    findMarcaById,
    findMarcasByNombre,
    findAllMarcas
}