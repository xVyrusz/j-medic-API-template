const Consulta = require('../../../db/models/index').consulta;

const createConsult = async (data) => {
    return await Consulta.create({
        testMade: data.testMade,
        diagnosis: data.diagnosis,
        tratamiento: data.tratamiento,
        idTest: data.idTest
    });
};

const createConsultData = async (data) => {
    return await Consulta.create({
        testMade: data.testMade,
        diagnosis: data.diagnosis,
        tratamiento: data.tratamiento,
        idTest: data.idTest
    });
};

module.exports = {
    consultCreate: createConsult,
    consultCreateData: createConsultData,
};