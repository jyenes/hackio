'use strict';

var Joi = require('joi');

module.exports = {
  email        : Joi.string().email().required(),
  password     : Joi.string().regex(/[a-zA-Z0-9]{3,30}/).required(),//REVIEW!!!
  market       : Joi.string().regex(/^[UK|NL|DE|BE]{2}$/i)
    .lowercase().required(),
  id           : Joi.string().regex(/^[0-9a-fA-F]{24}$/).required(),
  oneWebId     : Joi.string().regex(/^[0-9a-fA-F]{32}$/).required(),
  agent        : Joi.object().required(),
  bookingSize  : Joi.number().integer().min(0).required(),
  verified     : Joi.boolean(),
  emailVerified: Joi.boolean(),
  deleted      : Joi.boolean(),
  creationDate : Joi.date(),
  expiryDate   : Joi.date(),
  verifyToken  : Joi.string().token()
};
