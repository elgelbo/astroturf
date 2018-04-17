const axios = require('axios');
function getBus() {
  const AuthStr = 'Bearer '.concat(process.env.YELP_API_KEY);
  return axios.get('https://api.yelp.com/v3/businesses/search?term=coffee&latitude=32.786882&longitude=-117.399972', {
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
  let deets = [];
  const details = await asyncForEach(bus.data.businesses, async (bus) => {
      const AuthStr = 'Bearer '.concat(process.env.YELP_API_KEY);
      const response = await axios.get(`https://api.yelp.com/v3/businesses/${bus.id}`, { headers: { Authorization: AuthStr } });
      deets.push(response.data);
  });
  return deets;
};


module.exports.getResults = getResults;
