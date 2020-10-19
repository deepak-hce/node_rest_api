


/**
 * App configurations 
 */
 const databaseTable = require('./config/database-table');
 const config = require('./config/config');
 const app = require('./config/express');


 app.listen(config.port, () => {
     databaseTable.createTables("connection");
     console.log(`Express server is running on port ${config.port} in ${config.env} mode`);
 })




