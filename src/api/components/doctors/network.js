const express = require('express');
const router = express.Router();
const {
    createDoctorSchema,
    updateDoctorSchema,
    loginSchema,
    doctorIdSchema
} = require('../../../utils/validations/schemas/doctors.schema'); // eslint-disable-line
const validationHandler = require('../../../utils/middlewares/validationHandler');
const controller = require('./controller');

router.get('/', (req, res, next) => {
    try {
        res.status(200).json({
            Message: 'Hello!'
        });
    } catch (error) {
        next(error);
    }
});

router.get('/add', (req, res, next) => {
    try {
        res.status(200).json({
            Message: 'Hello!'
        });
    } catch (error) {
        next(error);
    }
});

router.post('/add', validationHandler(createDoctorSchema), async (req, res, next) => {
    const {
        firstName,
        lastName,
        username,
        password,
        license,
        phone
    } = req.body;
    const newDoctor = {
        firstName,
        lastName,
        username,
        password,
        license,
        phone
    };
    try {
        const doctor = await controller.doctorCreation(newDoctor);
        res.status(201).json({
            Message: 'Created',
            Doctor: {
                "id": doctor.id,
                "firstName": doctor.firstName,
                "lastName": doctor.lastName,
                "username": doctor.username,
                "license": doctor.license,
                "phone": doctor.phone
            }
        });
    } catch (error) {
        next(error);
    }
});


router.get('/list/:id', validationHandler({ id: doctorIdSchema }, 'params'), async (req, res, next) => {
        const { id } = req.params;

        try {
                const doctor = await controller.getDoctorById(id);
            res.json({
                Message: 'Found',
                Doctor: {
                    "id": doctor.id,
                    "firstName": doctor.firstName,
                    "lastName": doctor.lastName,
                    "username": doctor.username,
                    "license": doctor.license,
                    "phone": doctor.phone
                }
            });
        } catch (error) {
            next(error);
        }
    }
);

module.exports = router;
