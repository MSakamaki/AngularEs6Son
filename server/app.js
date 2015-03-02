'use strict';

var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var server = require('http').createServer(app);
var port =  process.env.PORT || 8000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: true, limit: '50mb' }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTION");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start server
server.listen(port,process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined
  , function () {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});

/* seed */
var menbers = [
    {id:1, name:'鈴木 一郎', register: new Date('2015-01-02').getTime()},
    {id:2, name:'鈴木 次郎', register: new Date('2015-01-04').getTime()},
    {id:3, name:'鈴木 三郎', register: new Date('2015-01-07').getTime()},
    {id:4, name:'鈴木 四郎', register: new Date('2015-01-12').getTime()}
    ];
var index = menbers.length+1;

// API
app.get('/api/menbers', function (req, res) {
  res.json(menbers);
});

app.get('/api/menbers/:id', function (req, res) {
  var id = req.params.id;
  var ret = void 0;
  menbers.forEach(function(menber){
    if (menber.id === parseInt(id)) ret = menber;
  });
  if (ret) res.json(ret);
  else res.status(404).send('No Data Found!');
});

app.put('/api/menbers/:id', function (req, res) {
  var body = req.body;
  var id = req.params.id;
  if (!body.name) res.status(200).send('valid data name!');
  menbers.forEach(function(menber){
    if (menber.id === parseInt(id)) {
      menber.name = body.name;
    }
  });
  res.status(200).send('register!');
});

app.post('/api/menbers', function (req, res) {
  var body = req.body;
  if (!body.name) res.status(200).send('valid data name!');
  var date = new Date();
  menbers.push({
    id:index++,
    name: body.name,
    register: new Date().getTime()
  });
  res.status(200).send('register!');
});

app.delete('/api/menbers/:id', function (req, res) {
  var id = req.params.id;
  menbers = menbers.filter(function(menber){
    return (menber.id !== parseInt(id));
  });
  res.status(200).send('register!');
});


exports = module.exports = app;