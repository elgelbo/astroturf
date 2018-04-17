var css = require('../css/app.css');
var points = require('./modules/points');
var map = require('./modules/map');
//
//
checkDate = async () => {
  const data = await points.points();
  map.makeMap(data);
};

checkDate();
