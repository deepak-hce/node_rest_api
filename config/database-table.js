const mysql = require('mysql');
const config = require('./config');
const ErrorResponse = require('../helpers/ErrorResponse');
const httpStatus = require('http-status');



const tableQueries = [
    `CREATE TABLE IF NOT EXISTS customers (id INT NOT NULL AUTO_INCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255), created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, isActive BOOLEAN DEFAULT 0, isDeleted BOOLEAN DEFAULT 0, PRIMARY KEY (id))`,
]


function createTables() {
    const con = mysql.createConnection({
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.database
    });

    con.connect(function (err) {
        if (err) {
            const error = new ErrorResponse('MYSQL connection failed while table creation', httpStatus.INTERNAL_SERVER_ERROR, err);
            throw error;
        }

        tableQueries.forEach((query) => {
            const sql = query;
            con.query(sql, function (err, result) {
                if (err) {
                    const error = new ErrorResponse('MYSQL Database table creation failed', httpStatus.INTERNAL_SERVER_ERROR, err);
                    throw error;
                }
            });
        })
        console.log('Database tables created successfully');
    });

}


module.exports = { createTables }
