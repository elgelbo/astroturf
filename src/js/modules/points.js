// const mapboxgl = require('mapbox-gl');
const axios = require('axios');

async function getData() {
  try {
    const response = await axios.get('/api/yelp');
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

points = async () => {
  const response = await axios.get('/api/yelp');
  return response.data;
};

module.exports.points = points;
