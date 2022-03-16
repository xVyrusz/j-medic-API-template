const Pacientes = require('../../../db/models/index').pacientes;

const createPatient = async (data) => {
    return await Pacientes.create({
        firstName: data.firstName,
        lastName: data.lastName,
        gender: data.gender,
        weight: data.weight,
        height: data.height,
        age: data.age,
        phone: data.phone,
        idBlood: data.idBlood
    });
};

const updatePatient = async (data) => {
    return await Pacientes.update(
        {
            firstName: data.firstName,
            lastName: data.lastName,
            gender: data.gender,
            weight: data.weight,
            height: data.height,
            age: data.age,
            phone: data.phone,
            idBlood: data.idBlood
        },
        {
            where: { id: data.id },
            returning: true,
            plain: true
        }
    );
};

const getPatientById = async (id) => {
    return await Pacientes.findOne({
        where: {
            id: id
        }
    });
};

module.exports = {
    patientCreate: createPatient,
    patientUpdate: updatePatient,
    patientById: getPatientById
};
