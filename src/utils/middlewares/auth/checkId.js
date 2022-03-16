const boom = require('@hapi/boom');

const checkIdRole = (req, res, next) => {
    const user = req.userData.id;
    if (user === 1) {
        next();
    }else {
        throw ( boom.unauthorized());
    }
};

module.exports = checkIdRole;