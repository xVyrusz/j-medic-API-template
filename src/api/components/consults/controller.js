const store = require('./store');


const consultCreation = async (data) => {
    return await store.consultCreate(data);
};

const consultCreationData = async (data) => {
    return await store.consultCreateData(data);
};

module.exports = {
    consultCreation,
    consultCreationData
};