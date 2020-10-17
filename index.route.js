const express = require('express');
const { validate, ValidationError, Joi } = require('express-validation')
const SuccessResponse = require('./helpers/SuccessResponse');
const validation = require('./helpers/request-validation');


const router = express.Router();



router.route('/health-check').get(validate(validation.healthCheck, {}, {}), function (req, res) {
    res.json(new SuccessResponse('Heath Ok response from express server.'));
})

module.exports = router;