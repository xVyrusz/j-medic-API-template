'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('medicos', [{
            firstName: 'Eduardo',
            lastName: 'Cisneros Becerra',
            username: 'xVyrusz',
            password: '@1Qawsed',
            license: '12345678',
            phone: '3312456789'
        }], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkInsert('medicos', null, {});
    }
};
