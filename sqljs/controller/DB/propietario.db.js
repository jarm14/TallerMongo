const PROPIETARIO = require('../../models/propietario');


const createPropietario = async(propietario) => {
    const resposeCreatedPropietario = await PROPIETARIO.create(propietario);
    return resposeCreatedPropietario;
};

const findPropietarioByDNI = async(dni) =>
    PROPIETARIO.findAll({
        where: { dni }
    });

const findAllPropietarios = async() => PROPIETARIO.findAll();

module.exports = {
    createPropietario,
    findPropietarioByDNI,
    findAllPropietarios
}