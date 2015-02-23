'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
server.listen(8000,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
  , function () {
  console.log('Express server listening on %d, in %s mode', 3000, app.get('env'));
});


// api 
app.get('/api/test', function (req, res) {
  res.json({"id":"0", "message": "hello express server"});
});

exports = module.exports = app;