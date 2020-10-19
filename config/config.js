const databaseTable = require('./database-table');

require('dotenv').config();

const envVars = process.env;

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    database: {
      host: 'localhost',
      user: 'root',
      password: 'test123',
      port: 3306,
      database: 'learning_rest_database'
    }
}


module.exports = config;