navigator.geolocation.getCurrentPosition(sucess, error, {
  enableHighAccuracy: true,
});

function sucess(position) {
  console.log(position);
  setUpMap([position.coords.longitude, position.coords.latitude], 14);
}
function error() {
  setUpMap([-2.24, 53.48], 12);
}

mapboxgl.accessToken =
  "pk.eyJ1IjoicHVsa2l0ZzE4IiwiYSI6ImNraGN2OGJnbjFyaGIycG5xYThleXF0cTMifQ.tBp2_Dtj-Jxyt0ch3KgJPw";

function setUpMap(center, zoom) {
  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: zoom,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, "top-left");
}
