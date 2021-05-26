function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center : {
            lat: 52.663420,
            lng: -8.626619
        }
    });

    var labels = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
var locations = [
    {lat: 52.639506114300495, lng: -8.646336526169451},
   // {lat:  , lng: },
   // {lat:  , lng: },
   // {lat:  , lng: },
];

var markers = locations.map(function(location, i) {
         return new google.maps.Marker ({
             position: location,
             label: labels[i % labels.length]
         }) 
   })

   new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}


