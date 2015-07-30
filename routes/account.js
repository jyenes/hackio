var account = require('../controllers').account;
var Account = module.exports;

Account.get = {
  method : 'GET',
  path   : '/account/{userID}',
  handler: account.get
};