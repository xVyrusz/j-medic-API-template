const bcrypt = require('bcryptjs');
const store = require('./store');
const boom = require('@hapi/boom');
const saltRounds = 10;

const doctorCreation = async (data) => {
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(data.password, saltRounds, (err, hash) => {
            if (err) reject('Error hashing password');
            resolve(hash);
        });
    });

    const objUser = await store.doctorByUser(data.username);
    const objCedula = await store.doctorByLicense(data.license);

    if (objUser.length >= 1) {
        throw boom.conflict('User already exist');
    } else {
        if (objCedula.length >= 1) {
            throw boom.conflict('License already exist');
        } else {
            data.password = hashedPassword;
            return await store.doctorCreate(data);
        }
    }
};

const getDoctorById = async (id) => {
    return store.doctorById(id);
};

module.exports = {
    doctorCreation,
    getDoctorById
};
