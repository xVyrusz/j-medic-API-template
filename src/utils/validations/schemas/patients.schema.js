const joi = require('joi');

const baseValidString = joi.string().min(3).max(100);

// firstNameSchema,
// lastNameSchema,
// gender,
// weight,
// height,
// age,
// phone,
// idBlood

const patientIdSchema = joi.number();
const firstNameSchema = baseValidString;
const lastNameSchema = baseValidString;
const genderSchema = baseValidString;
const weightSchema = joi.number().min(1).max(700);
const heightSchema = joi.number().max(3);
const ageSchema = joi.number().min(1).max(130);
const phoneSchema = joi
    .string()
    .min(8)
    .max(20)
    .regex(/^\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})$/)
    .message('Phone number invalid.');
const idBloodSchema = joi.number();

const createPatientSchema = {
    firstName: firstNameSchema.required(),
    lastName: lastNameSchema.required(),
    gender: genderSchema.required(),
    weight: weightSchema.required(),
    height: heightSchema.required(),
    age: ageSchema.required(),
    phone: phoneSchema.required(),
    idBlood: idBloodSchema.required()
};

const updatePatientSchema = {
    id: patientIdSchema,
    firstName: firstNameSchema,
    lastName: lastNameSchema,
    gender: genderSchema,
    weight: weightSchema,
    height: heightSchema,
    age: ageSchema,
    phone: phoneSchema,
    idBlood: idBloodSchema
};

module.exports = {
    createPatientSchema,
    updatePatientSchema,
    patientIdSchema
};
