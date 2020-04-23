var accountList = require('./account-data');

module.exports = function(server) {
  server.post('/api/account', function(req, res) {
    res.send(req.body)
  });

  server.get('/api/account', (req, res, next) => {
    res.send(accountList());
    next();    
  });
};
 