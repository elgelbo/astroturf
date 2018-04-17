const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  "pk.eyJ1IjoiZWxnZWxibyIsImEiOiJjajRlNXB6dzQwc3FyMzJuaHMwaGo0bTVmIn0.1zglQ_bZTA-DsJ4PJkLAQw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/elgelbo/cjflz6ecx0fvf2soa5vbnxyyt"
});

makeMap = (data) => {
  for (var i = 0; i < data.length; i++) {
    var marker = data[i];
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = 'url(https://placekitten.com/g/60/60/)';
    el.style.width = 60 + 'px';
    el.style.height = 60 + 'px';
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  }
};

module.exports.makeMap = makeMap;
