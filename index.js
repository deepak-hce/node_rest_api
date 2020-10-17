


/**
 * App configurations 
 */

 const config = require('./config/config');
 const app = require('./config/express');

 console.log(config);



 app.listen(config.port, () => {
     console.log(`Express server is running on port ${config.port} in ${config.env} mode`);
 })
