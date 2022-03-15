const doctorRoutes = require('../components/doctors/network');
const patientRoutes = require('../components/patients/network');

const routes = (app) => {
    app.use('/api/doctor', doctorRoutes);
    app.use('/api/patients', patientRoutes);
};

module.exports = routes;
