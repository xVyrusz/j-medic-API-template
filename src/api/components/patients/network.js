const express = require('express');
const router = express.Router();
const {
    createPatientSchema,
    updatePatientSchema,
    patientIdSchema
} = require('../../../utils/validations/schemas/patients.schema'); // eslint-disable-line
const validationHandler = require('../../../utils/middlewares/validationHandler');
const controller = require('./controller');
const checkJwt = require('../../../utils/middlewares/auth/checkJwt');

router.get('/', checkJwt, (req, res, next) => {
    try {
        res.status(200).json({
            Message: 'Hello!'
        });
    } catch (error) {
        next(error);
    }
});

router.get('/add', checkJwt, (req, res, next) => {
    try {
        res.status(200).json({
            Message: 'Hello!'
        });
    } catch (error) {
        next(error);
    }
});

router.post('/add', checkJwt, validationHandler(createPatientSchema), async (req, res, next) => {
    const {
        firstName,
        lastName,
        gender,
        weight,
        height,
        age,
        phone,
        idBlood
    } = req.body;
    const newPatient = {
        firstName,
        lastName,
        gender,
        weight,
        height,
        age,
        phone,
        idBlood
    };
    try {
        const patient = await controller.patientCreation(newPatient);
        res.status(201).json({
            Message: 'Created',
            Patient: {
                "id": patient.id,
                "firstName": patient.firstName,
                "lastName": patient.lastName,
                "gender": patient.gender,
                "weight": patient.weight,
                "height": patient.height,
                "age": patient.age,
                "phone": patient.phone,
                "idBlood": patient.idBlood
            }
        });
    } catch (error) {
        next(error);
    }
});

router.get('/update', checkJwt, (req, res, next) => {
    try {
        res.status(200).json({
            Message: 'Hello!'
        });
    } catch (error) {
        next(error);
    }
});

router.put('/update', checkJwt, validationHandler(updatePatientSchema), async (req, res, next) => {
    const {
        id,
        firstName,
        lastName,
        gender,
        weight,
        height,
        age,
        phone,
        idBlood
    } = req.body;
    const newPatient = {
        id,
        firstName,
        lastName,
        gender,
        weight,
        height,
        age,
        phone,
        idBlood
    };
    try {
        const patient = await controller.patientUpdate(newPatient);
        res.status(201).json({
            Message: 'Updated',
            Patient: {
                "id": patient.id,
                "firstName": patient.firstName,
                "lastName": patient.lastName,
                "gender": patient.gender,
                "weight": patient.weight,
                "height": patient.height,
                "age": patient.age,
                "phone": patient.phone,
                "idBlood": patient.idBlood
            }
        });
    } catch (error) {
        next(error);
    }
});

router.get('/list/:id', checkJwt, validationHandler({ id: patientIdSchema }, 'params'), async (req, res, next) => {
        const { id } = req.params;
        try {
                const patient = await controller.getPatientById(id);
            res.json({
                Message: 'Found',
                Patient: {
                    "id": patient.id,
                    "firstName": patient.firstName,
                    "lastName": patient.lastName,
                    "gender": patient.gender,
                    "weight": patient.weight,
                    "height": patient.height,
                    "age": patient.age,
                    "phone": patient.phone,
                    "idBlood": patient.idBlood
                }
            });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;