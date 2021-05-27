function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center : {
            lat: 53.451000,
            lng: -7.671536
        }
    });

    var labels = "ABDEFGHIJKLMNOPQRSTUVWXYZ";
var locations = [
    // Limerick locations
    {lat: 52.639506114300495, lng: -8.646336526169451},
    {lat: 52.66338591266621, lng: -8.625280533298403},
    {lat: 52.66201799710162, lng: -8.596429671187568},
   // Dublin locations
    {lat: 53.34752054297387, lng: -6.263387242721198},
    {lat: 53.339843659667125, lng: -6.261895909435105},
    {lat: 53.287093942899915, lng: -6.241904552085966},
    {lat: 53.40108304250218, lng: -6.179863099576663},
    {lat: 53.393141114410525, lng: -6.389765208010351},
    //Cork locations
    {lat: 51.87847478434138, lng: -8.431744991372355},
    {lat: 51.88131042524029, lng: -8.508001040906814},
    {lat: 51.89813509999993, lng: -8.473540661583442},
    {lat: 51.91451558174889, lng: -8.47152489982883},
    //Galway locations
    {lat: 53.273848955380814, lng: -9.050476920835614},
    //Belfast locations
    {lat: 54.59554579156355, lng: -5.8899467558115415},
    {lat: 54.599441568482916, lng: -5.9296091683687795},
    {lat: 54.65547224444842, lng: -5.917935309614336},
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


