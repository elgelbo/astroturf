// var css = require('../css/app.css');
const axios = require('axios');
var points = require('./modules/points');
var map = require('./modules/map');

addYelpData = async () => {
  const response = await axios.get('/api/yelp');
  map.makeMap(response.data);
};

addYelpData();
