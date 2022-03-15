const store = require('./store');
const boom = require('@hapi/boom');

const patientCreation = async (data) => {
    if (data == null) {
        throw boom.conflict('Cant create the patient.');
    } else {
        return await store.patientCreate(data);
    }
};

const patientUpdate = async (data) => {};

const getPatientById = async (id) => {
    return store.patientById(id);
};

module.exports = {
    patientCreation,
    patientUpdate,
    getPatientById
};
