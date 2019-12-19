class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(cafes){
    const cafesObj = {};
    cafes.forEach(cafe => cafesObj[cafe.id] = cafe);

    cafes
      .filter(cafe => !this.markers[cafe.id])
      .forEach(newCafe => this.createMarkerFromCafe(newCafe, this.handleClick));
    Object.keys(this.markers)
      .filter(cafeId => !cafesObj[cafeId])
      .forEach(cafeId => this.removeMarker(this.markers[cafeId]));
  }

  createMarkerFromCafe(cafe) {
    const position = new google.maps.LatLng(cafe.lat, cafe.long);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      cafeId: cafe.id
    });

    marker.addListener('click', () => this.handleClick(cafe));
    this.markers[marker.cafeId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.cafeId].setMap(null);
    delete this.markers[marker.cafeId];
  }



}

export default MarkerManager;