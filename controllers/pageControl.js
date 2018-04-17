const yelpApi = require('../handlers/yelpMiddleware');

exports.homePage = (req, res) => {
  res.render('index', {
    Obj: { "name":"John", "age":30, "car":null },
    Txt: 'Yo'});
}


exports.yelpPage = async (req, res) => {
  res.render('yelp', {
    Txt: 'Yo'});
}

exports.yelpData = async (req, res) => {
  const data = await yelpApi.getResults();
  res.json(data);
}
