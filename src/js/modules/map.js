const mapboxgl = require('mapbox-gl');
const turf = require("@turf/turf");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxnZWxibyIsImEiOiJjajRlNXB6dzQwc3FyMzJuaHMwaGo0bTVmIn0.1zglQ_bZTA-DsJ4PJkLAQw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v9",
  zoom: 10,
  center: [-117.15, 32.75]
});

makeMap = (data) => {
  map.addSource('yelp', {
    type: 'geojson',
    data: data
  });
  map.addLayer({
    "id": "yelp",
    "type": "symbol",
    "source": "yelp",
    "layout": {
      'icon-image': 'marker-15',
      "icon-allow-overlap": true
    }
  });
  const bbox = turf.bbox(data);
  map.fitBounds(bbox, {'padding': 100});
  // Center the map on the coordinates of any clicked symbol from the 'yelp' layer.
  map.on('click', 'yelp', function(e) {
    map.flyTo({
      center: e.features[0].geometry.coordinates,
      zoom: 16
    });
  });

  // Change the cursor to a pointer when the it enters a feature in the 'yelp' layer.
  map.on('mouseenter', 'yelp', function() {
    map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'yelp', function() {
    map.getCanvas().style.cursor = '';
  });
}

module.exports.makeMap = makeMap;
