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

// module.exports = {
//     create(req, res) {
//         return Medicos
//             .create({
//                 username: req.params.username,
//                 status: req.params.status
//             })
//             .then((usuario) => res.status(200).send(usuario))
//             .catch((error) => res.status(400).send(error));
//     },
//     list(req, res) {
//         return Medicos
//             .findAll({})
//             .then((usuario) => res.status(200).send(usuario))
//             .catch((error) => res.status(400).send(error));
//     },
//     find(req, res) {
//         return Medicos
//             .findAll({
//                 where: {
//                     username: req.params.username
//                 }
//             })
//             .then((usuario) => res.status(200).send(usuario))
//             .catch((error) => res.status(400).send(error));
//     }
// };
