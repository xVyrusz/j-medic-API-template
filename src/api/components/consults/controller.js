const store = require('./store');


const consultCreation = async (data) => {
    return await store.consultCreate(data);
};

module.exports = {
    consultCreation
};