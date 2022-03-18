const express = require('express');
const router = express.Router();
const {
    createConsultSchema,
    createConsultDataSchema
} = require('../../../utils/validations/schemas/doctors.schema'); // eslint-disable-line
const validationHandler = require('../../../utils/middlewares/validationHandler');
const controller = require('./controller');
const checkJwt = require('../../../utils/middlewares/auth/checkJwt');

router.post('/consultData/add', checkJwt, validationHandler(createConsultDataSchema), async (req, res, next) => {
    const {
        dateVisit,
        idDoctor,
        idPatient,
        idReason
    } = req.body;
    const newConsultData= {
        dateVisit,
        idDoctor,
        idPatient,
        idReason
    };

    try {
            const consultData = await controller.consultCreationData(newConsultData);
        res.json({
            Message: 'Create',
            ConsultData: {
                "testMade": consultData.testMade,
                "diagnosis": consultData.diagnosis,
                "tratamiento": consultData.tratamiento,
                "idTest": consultData.idTest
            }
        });
    } catch (error) {
        next(error);
    }
}
);

router.post('/add', checkJwt, validationHandler(createConsultSchema), async (req, res, next) => {
    const {
        testMade,
        diagnosis,
        tratamiento,
        idTest
    } = req.body;
    const newConsult = {
        testMade,
        diagnosis,
        tratamiento,
        idTest
    };

    try {
            const consult = await controller.consultCreation(newConsult);
        res.json({
            Message: 'Create',
            Consult: {
                "testMade": consult.testMade,
                "diagnosis": consult.diagnosis,
                "tratamiento": consult.tratamiento,
                "idTest": consult.idTest
            }
        });
    } catch (error) {
        next(error);
    }
}
);