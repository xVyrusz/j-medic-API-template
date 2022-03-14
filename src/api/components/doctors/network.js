const express = require('express');
const router = express.Router();
const {
    createUserSchema,
    updateDoctorSchema,
    loginSchema,
    doctorIdSchema
} = require('../../../utils/validations/schemas/doctors.schema'); // eslint-disable-line
const validationHandler = require('../../../utils/middlewares/validationHandler');

router.get('/', (req, res, next) => {
    try {
        res.status(200).json({
            Message: 'Hello!'
        });
    } catch (error) {
        next(error);
    }
});

//  Example of req.body validation
router.post('/', validationHandler(createUserSchema), (req, res, next) => {
    try {
        res.status(201).json({
            Message: 'Created'
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
