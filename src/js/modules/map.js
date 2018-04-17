const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxnZWxibyIsImEiOiJjajRlNXB6dzQwc3FyMzJuaHMwaGo0bTVmIn0.1zglQ_bZTA-DsJ4PJkLAQw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/elgelbo/cjflz6ecx0fvf2soa5vbnxyyt"
});

// map.on("load", function() {
//
// });



// map.querySourceFeatures('pclssouthsouth-3zrxor')


makeMap = (data) => {
  const geoData = JSON.stringify(data);
  console.log(geoData);

  map.addSource("national-park", {
         "type": "geojson",
         "data": {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.26956,32.81447]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.1842,32.82209]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.29421,33.04654]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.25232,32.78365]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.01949,32.76506]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.225558185472,32.9020031655509]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.035335488617,32.6603735231558]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.2021011,32.7712275]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.2517811,32.7456979]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.2563794,32.7965098]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.2529161,32.785506]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.16693,32.71625]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.211196899414,32.7409629821777]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.251088345988,32.7698768568836]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.10602,32.58738]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.294556573033,33.0497795359611]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.07487,32.98415]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.249174,32.7453209]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.2334345,32.8684918]},"properties":{"title":"Made in the USA"}},{"type":"Feature","geometry":{"type":"Point","coordinates":[-117.228241,32.7262001]},"properties":{"title":"Made in the USA"}}]}
  });

     map.addLayer({
         "id": "park-volcanoes",
         "type": "circle",
         "source": "national-park",
         "paint": {
             "circle-radius": 6,
             "circle-color": "#B42222"
         },
         "filter": ["==", "$type", "Point"],
     });
};

module.exports.makeMap = makeMap;
