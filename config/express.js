const express = require('express');
const httpStatus = require('http-status');
const ErrorResponse = require('../helpers/ErrorResponse');
const routes = require('../index.route');
const expressValidation = require('express-validation');
const databaseConnect = require('express-myconnection');
const mysql = require('mysql');
const config = require('./config');


const app = express();

app.use(express.json());



// Database connectivity 

app.use(databaseConnect(mysql, {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
}, 'single'))






app.use('/api/v1', routes);

app.use((req, res, next) => {
    const err = new ErrorResponse('API End Point not found!', httpStatus.NOT_FOUND);
    return next(err);
})

// Error handling

app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        const validationError = new ErrorResponse(err.details.body[0].message ? err.details.body[0].message : 'Validation Error, Kindly check request data', httpStatus.BAD_REQUEST, err);
        err = validationError;
    }

    if (!(err instanceof ErrorResponse)) {
        const unknownErr = new ErrorResponse('Internal Server Error, Kindly contact system administrator', httpStatus.INTERNAL_SERVER_ERROR, err);
        err = unknownErr;
    }

    res.status(err.Status).json(err);
})


module.exports = app;