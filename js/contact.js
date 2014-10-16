// /************** Google Map *********************/
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
}

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(30.508862899999997,114.4259268)
    };
    var map = new google.maps.Map(document.getElementById('templatemo_map'),  mapOptions);
}