const doctorRoutes = require('../components/doctors/network');
const patientRoutes = require('../components/patients/network');
const consultRoutes = require('../components/consults/network.');
const homeRoutes = require('../components/home/network.');

const routes = (app) => {
    app.use('/api/doctor', doctorRoutes);
    app.use('/api/patients', patientRoutes);
    app.use('/api/consult', consultRoutes);
    app.use('/', homeRoutes);
};

module.exports = routes;
