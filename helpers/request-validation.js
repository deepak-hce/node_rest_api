const { Joi } = require("express-validation");

module.exports = {
    healthCheck: {
        body: Joi.object({
            pageNo: Joi.required()
        })
    }
}