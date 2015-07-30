'use strict';
var capi2 = require('tc-customer-api-client');
var client = capi2({url: process.env.CAPI});

var Account = module.exports;

Account.get = function (userId, getCb) {
  client.account.get(userId, getCb);
};

