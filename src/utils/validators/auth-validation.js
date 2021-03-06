const Joi = require("joi");

var AuthValidator = {};

//Register Validation Scheema
AuthValidator.registerValidation = (data) => {
  const scheema = Joi.object({
    name: Joi.string().min(5).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return scheema.validate(data);
};

//Login Validation Scheema
AuthValidator.loginValidation = (data) => {
  const scheema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return scheema.validate(data);
};

module.exports = AuthValidator;
