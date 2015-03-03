exports = module.exports = function(app){

  var country = require('../json/country.json');

  app.get('/api/countrys', function (req, res) {
    res.json(country);
  });
};