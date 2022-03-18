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
        dateVisit: data.dateVisit,
        idDoctor: data.idDoctor,
        idPatient: data.idPatient,
        idReason: data.idReason
    });
};

module.exports = {
    consultCreate: createConsult,
    consultCreateData: createConsultData,
};