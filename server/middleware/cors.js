const app = module.exports = require('express')();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  // ^ cors must be customized!  this should not be allowed in production
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
