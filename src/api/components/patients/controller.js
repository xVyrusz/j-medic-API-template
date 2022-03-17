const store = require('./store');

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
