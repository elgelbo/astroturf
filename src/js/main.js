const axios = require('axios');
var points = require('./modules/points');
var map = require('./modules/map');

addYelpData = async () => {
  const response = await axios.get('/api/yelp');
  console.log(response.data);
  map.makeMap(response.data);
};

addYelpData();


yelpQuery = async () => {
  const response = await axios.get('/api/search/?q=coffee');
  console.log(response.data);
  map.addData(response.data);
};

yelpQuery();
