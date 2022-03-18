const joi = require('joi');

const dateSchema = joi.date().greater('now');
const testMadeSchema = joi.string().max(250);
const diagnosisSchema = joi.string().max(250);
const tratamientoSchema = joi.string().max(250);
const IdSchema = joi.number();


const createConsultSchema = {
    testMade: testMadeSchema.required(),
    diagnosis: diagnosisSchema.required(),
    tratamiento: tratamientoSchema.required(),
    idTest: IdSchema.required()
};

const createConsultDataSchema = {
    dateVisit: dateSchema.required(),
    idDoctor: IdSchema.required(),
    idPatient: IdSchema.required(),
    idReason: IdSchema.required()
};

module.exports = {
    createConsultSchema,
    createConsultDataSchema
};