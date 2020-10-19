
const express = require('express');
const router = express.Router();
const customerCtrl = require('./customerController');
const { validate, ValidationError, Joi } = require('express-validation')
const validation = require('../../helpers/request-validation');


router.post('/', validate(validation.customerCreate, {}, {}), customerCtrl.create);



module.exports = router;