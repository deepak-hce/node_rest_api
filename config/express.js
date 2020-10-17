const express = require('express');
const httpStatus = require('http-status');
const ErrorResponse = require('../helpers/ErrorResponse');
const routes = require('../index.route');
const expressValidation = require('express-validation');

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

app.use((req, res, next) => {
    const err = new ErrorResponse('API End Point not found!', httpStatus.NOT_FOUND);
    return next(err);
})

// Error handling

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        console.log(err.details);
        const validationError = new ErrorResponse(err.details.body[0].message ? err.details.body[0].message : 'Validation Error, Kindly check request data', httpStatus.BAD_REQUEST, err);
        err = validationError;
    }
    res.status(err.Status).json(err);
})

module.exports = app;