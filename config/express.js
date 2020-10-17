const express = require('express');
const httpStatus = require('http-status');
const ErrorResponse = require('../helpers/ErrorResponse');
const routes = require('../index.route');

const app = express();

app.use(express.json());

app.use('/api/v1', routes);

app.use((req, res, next) => {
    const err = new ErrorResponse('API End Point not found!', httpStatus.NOT_FOUND );
    return next(err);
})

// Error handling

app.use((err, req, res, next) => {
    res.status(err.Status).json(err);
})

module.exports = app;