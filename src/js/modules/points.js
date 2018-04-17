// const mapboxgl = require('mapbox-gl');
const axios = require('axios');

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
    // const featCollect = {
    //   "type": "FeatureCollection",
    //   "features": collection
    // };

    return collection;
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
