const store = require('./store');
const boom = require('@hapi/boom');

const patientCreation = async (data) => {
    return await store.patientCreate(data);
};

const patientUpdate = async (data) => {
    return await store.patientUpdate(data);
};

const getPatientById = async (id) => {
    return store.patientById(id);
};

module.exports = {
    patientCreation,
    patientUpdate,
    getPatientById
};
