// const mapboxgl = require('mapbox-gl');
const axios = require('axios');
const name = 'Doug';

function getCoffee() {
  return new Promise(resolve => {
    setTimeout(() => resolve('☕'), 2000); // it takes 2 seconds to make coffee
  });
}

createFeature = (res) => {
  const lat = res.coordinates.latitude;
  const lng = res.coordinates.longitude;
  const coords = [lng, lat];
  var feature = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": coords
    },
    "properties": {
      "title": "Made in the USA",
    }
  };
  return feature;
}

async function getData() {
  try {
    const response = await axios.get('/api/yelp');
    const collection = [];
    response.data.forEach( (res) => {
      const feature = createFeature(res);
      collection.push(feature);
    });
    const featCollect = {
      "type": "FeatureCollection",
      "features": collection
    };

    return featCollect;
  } catch (error) {
    console.error(error);
  }
}

points = async () => {
  console.log('Getting data.');
  const data = await getData();
  return data;
};

module.exports.points = points;
