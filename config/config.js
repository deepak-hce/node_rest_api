require('dotenv').config();

const envVars = process.env;

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT
}


module.exports = config;