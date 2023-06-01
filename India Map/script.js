let map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 28.6139, lng: 77.2090 }, // Coordinates for Delhi
    zoom: 12
  });
}

function search() {
  const place = document.getElementById('search-input').value;

  // Use the entered place for searching or any other logic you prefer

  // Example: Centering the map on the entered place
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: place }, function(results, status) {
    if (status === 'OK') {
      map.setCenter(results[0].geometry.location);
      const marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}