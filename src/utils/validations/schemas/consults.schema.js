const joi = require('joi');

const dateSchema = joi.date().greater('now');
const testMadeSchema = joi.string().max(250);
const diagnosisSchema = joi.string().max(250);
const tratamientoSchema = joi.string().max(250);
const IdTestSchema = joi.number();


const createConsultSchema = {
    testMade: testMadeSchema.required(),
    diagnosis: diagnosisSchema.required(),
    tratamiento: tratamientoSchema.required(),
    idTest: IdTestSchema.required()
};

module.exports = {
    createConsultSchema,
};