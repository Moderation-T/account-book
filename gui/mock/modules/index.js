var login = require('./login/login');
let account = require('./account/account');

module.exports = function(server) {
  login(server);
  account(server);
};
