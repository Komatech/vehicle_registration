const Joi = require('joi');

const userSchema = (data)=> {
    const schema = Joi.object({
        firstName:Joi.string().min(3).required(),
        middleName:Joi.string().min(3),
        lastName:Joi.string().min(3).required(),
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data)
}

const loginSchema = (data)=> {
    const schema = Joi.object({
        email:Joi.string().min(6).required().email(),
        password:Joi.string().min(6).required()
    })
    return schema.validate(data)
}

module.exports.userSchema = userSchema
module.exports.loginSchema = loginSchema