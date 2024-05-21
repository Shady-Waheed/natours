const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

maptilersdk.config.apiKey = 'YExDCio1SPzRYHkzCi3Z';
const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: 'streets-v2',
  center: [16.62662018, 49.2125578], // starting position [lng, lat]
  zoom: 14, // starting zoom
});
