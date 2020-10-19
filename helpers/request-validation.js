const { Joi } = require("express-validation");

module.exports = {
    healthCheck: {
        body: Joi.object({
            pageNo: Joi.required()
        })
    },

    customerCreate: {
        body: Joi.object({
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required()
        })
    }

}