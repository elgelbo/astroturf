const yelpApi = require('../handlers/yelpMiddleware');

exports.homePage = (req, res) => {
  res.render('index', {
    Obj: { "name":"John", "age":30, "car":null },
    Txt: 'Yo'});
}

exports.yelpPage = (req, res) => {
  res.render('yelp', {
    Txt: 'Yo'});
}

exports.queryPage = (req, res) => {
  res.render('geo', {
    Txt: 'Yo'});
}

exports.yelpData = async (req, res) => {
  const data = await yelpApi.getResults();
  res.json(data);
}

exports.queryData = async (req, res) => {
  let cat = req.query.q;
  const queryData = await yelpApi.queryResults(cat);
  res.json(queryData);
}
