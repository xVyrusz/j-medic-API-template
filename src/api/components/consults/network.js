const express = require('express');
const router = express.Router();
const {
    createConsultSchema
} = require('../../../utils/validations/schemas/doctors.schema'); // eslint-disable-line
const validationHandler = require('../../../utils/middlewares/validationHandler');
const controller = require('./controller');
const checkJwt = require('../../../utils/middlewares/auth/checkJwt');

router.post('/consultData/add', checkJwt, validationHandler(createConsultSchema), async (req, res, next) => {
    const {
        testMade,
        diagnosis,
        tratamiento,
        idTest
    } = req.body;
    const newMeet = {
        testMade,
        diagnosis,
        tratamiento,
        idTest
    };

    try {
            const meet = await controller.getDoctorById(newMeet);
        res.json({
            Message: 'Create',
            Meet: {
                "testMade": meet.testMade,
                "diagnosis": meet.diagnosis,
                "tratamiento": meet.tratamiento,
                "idTest": meet.idTest
            }
        });
    } catch (error) {
        next(error);
    }
}
);

router.post('/consult/add', checkJwt, validationHandler(createConsultSchema), async (req, res, next) => {
    const {
        testMade,
        diagnosis,
        tratamiento,
        idTest
    } = req.body;
    const newMeet = {
        testMade,
        diagnosis,
        tratamiento,
        idTest
    };

    try {
            const meet = await controller.getDoctorById(newMeet);
        res.json({
            Message: 'Create',
            Meet: {
                "testMade": meet.testMade,
                "diagnosis": meet.diagnosis,
                "tratamiento": meet.tratamiento,
                "idTest": meet.idTest
            }
        });
    } catch (error) {
        next(error);
    }
}
);