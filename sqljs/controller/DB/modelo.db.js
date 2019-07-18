const MODEL = require('../../models/modelo');


const createModelo = async(modelo) => {
    const resposeCreateModel = await MODEL.create(modelo);
    return resposeCreateModel;
};

const findModeloById = async(id) =>
    MODEL.findAll({
        where: { id }
    });

const findModeloByNombre = async(nombre) =>
    MODEL.findAll({
        where: { nombre }
    }) || [];

const findAllModelos = async() => MODEL.findAll();

module.exports = {
    createModelo,
    findModeloById,
    findModeloByNombre,
    findAllModelos
}