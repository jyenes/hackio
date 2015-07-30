'use strict';

var account = require('../controllers').account;
var accountValidation = require('../schemas').account;
var Account = module.exports;

Account.get = {
  method : 'GET',
  path   : '/account/{userID}',
  config: {
    handler: account.get,
    validate : {
      params : {
        userID: accountValidation.id
      }
    }
  }
};