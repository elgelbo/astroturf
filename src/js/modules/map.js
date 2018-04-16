const mapboxgl = require('mapbox-gl');
const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxnZWxibyIsImEiOiJjajRlNXB6dzQwc3FyMzJuaHMwaGo0bTVmIn0.1zglQ_bZTA-DsJ4PJkLAQw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/elgelbo/cjflz6ecx0fvf2soa5vbnxyyt"
});
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  country: 'US',
  bbox: [-117.46582031249999,
    32.37068286611427, -116.29302978515625,
    33.26395335923739
  ]
});
map.addControl(geocoder);
map.on("load", function() {
  map.addSource("single-point", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: []
    }
  });

  map.addLayer({
    id: "point",
    source: "single-point",
    type: "circle",
    paint: {
      "circle-radius": 10,
      "circle-color": "#007cbf"
    }
  });
});
function test(t) {
  if (t === undefined) {
     return 'Undefined value!';
  }
  return t.properties.APN_8;
}

lastGeocode = "";
geocoder.on('result', function(ev) {
  if (ev.result.center.toString() !== lastGeocode) {
    map.getSource("single-point").setData(ev.result.geometry);
    function getUserData(coords, name) {
      if (map.loaded() === true) {
        var features = map.queryRenderedFeatures([window.innerWidth / 2, window.innerHeight / 2], {
          layers: ['pclssouthsouth-3zrxor']
        });
        var popup = new mapboxgl.Popup()
          .setLngLat(ev.result.geometry.coordinates)
          .setHTML(`<h2>${ev.result.text}</h2><p>APN: ${test(features[0])}</p>`)
          .addTo(map);
      } else {
        setTimeout(getUserData, 100);
      }
    }
    getUserData();
  }
  lastGeocode = ev.result.center.toString();
});


// map.querySourceFeatures('pclssouthsouth-3zrxor')
map.on("click", function(e) {
  var features = map.queryRenderedFeatures(e.point);
  if (features[0].layer.id === "pclssouthsouth-3zrxor") {
    var description = "APN: " + features[0].properties.APN_8;
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(description)
      .addTo(map);
  } else {
    console.log("not parcel");
  }
});

module.exports = map;
