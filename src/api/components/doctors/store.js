const Medicos = require('../../../db/models/index').medicos;

const createDoctor = async (data) => {
    return await Medicos.create({
        firstName: data.firstName,
        lastName: data.lastName,
        username: data.username,
        password: data.password,
        license: data.license,
        phone: data.phone
    });
};

const getDoctorById = async (id) => {
    return await Medicos.findOne({
        where: {
            id: id
        }
    });
};

const getDoctorUser = async (username) => {
    return await Medicos.findOne({
        where: {
            username: username
        }
    });
};

const getDoctorCedula = async (license) => {
    return await Medicos.findOne({
        where: {
            license: license
        }
    });
};

module.exports = {
    doctorCreate: createDoctor,
    doctorById: getDoctorById,
    doctorByUser: getDoctorUser,
    doctorByLicense: getDoctorCedula
};
