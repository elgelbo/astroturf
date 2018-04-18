const axios = require('axios');
const turf = require("@turf/turf");


function createGeo(data) {
    let features = [];
    data.forEach((item)=>{
        const lat = item.coordinates.latitude;
        const lng = item.coordinates.longitude;
        const Name = item.name;
        var opts = {
            id: item.id
        };
        var point = turf.point([lng,lat], {name: Name}, opts);
        features.push(point);
    });
    const collection = turf.featureCollection(features);
    return collection;
}


function getBus() {
  const AuthStr = 'Bearer '.concat(process.env.YELP_API_KEY);
  return axios.get('https://api.yelp.com/v3/businesses/search?categories=breweries&limit=50&sort_by=distance&latitude=32.75&longitude=-117.15', {
    headers: {
      Authorization: AuthStr
    }
  })
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

getResults = async (name) => {
  const bus = await getBus();
  const geo = createGeo(bus.data.businesses);
  return geo;
};

module.exports.getResults = getResults;

function yelpQuery(term) {
  const AuthStr = 'Bearer '.concat(process.env.YELP_API_KEY);
  return axios.get(`https://api.yelp.com/v3/businesses/search?categories=${term}&limit=50&sort_by=distance&latitude=32.75&longitude=-117.15`, {
    headers: {
      Authorization: AuthStr
    }
  })
}

queryResults = async (term) => {
  const results = await yelpQuery(term);
  const geo = createGeo(results.data.businesses);
  return geo;
};

module.exports.queryResults = queryResults;
