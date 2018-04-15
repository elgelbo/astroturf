mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxnZWxibyIsImEiOiJjajRlNXB6dzQwc3FyMzJuaHMwaGo0bTVmIn0.1zglQ_bZTA-DsJ4PJkLAQw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/elgelbo/cjflz6ecx0fvf2soa5vbnxyyt"
});
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
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

  // Listen for the `geocoder.input` event that is triggered when a user
  // makes a selection and add a symbol that matches the result.
  geocoder.on("result", function(ev) {
    map.getSource("single-point").setData(ev.result.geometry);
});
});
