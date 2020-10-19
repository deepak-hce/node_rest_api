const ErrorResponse = require('../../helpers/ErrorResponse');
const SuccessResponse = require('../../helpers/SuccessResponse');
const httpStatus = require('http-status');


function create(req, res, next) {
    const body = req.body;
    req.getConnection((err, con) => {
        if (err) {
            err = new ErrorResponse('Error While getting database connectivity', httpStatus.INTERNAL_SERVER_ERROR, err);
            return next(err);
        }

        con.query('INSERT INTO customers(name, email, password) VALUES (?, ?, ?)', [
            body.name, body.email, body.password
        ], (err, result) => {
            if (err) {
                err = new ErrorResponse('Error While saving data to customer table', httpStatus.INTERNAL_SERVER_ERROR, err);
                return next(err);
            }
            res.json(new SuccessResponse('Customer Registered successfully', result));
        })
    })
}


module.exports = { create }
