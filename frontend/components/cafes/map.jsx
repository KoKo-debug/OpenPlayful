import React from 'react';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';


const MapOptions = {
  center: { lat: 40.7128, lng: -74.0060 },
  zoom: 10
};

class Map extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, MapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    if (this.props.singleCafe) {
      this.props.fetchCafe(this.props.cafeId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.cafes);
    }
  }

  componentDidUpdate() {
    if (this.props.singleCafe) {
      const targetCafeKey = Object.keys(this.props.cafes)[0];
      const targetCafe = this.props.cafes[targetCafeKey];
      this.MarkerManager.updateMarkers([targetCafe]);
    } else {
      this.MarkerManager.updateMarkers(this.props.cafes);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat:north, lng: east},
        southWest: { lat: south, lng: west}
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(cafe) {
    this.props.history.push(`cafes/${cafe.id}`)
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'cafes/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    const {cafe} = this.props;
    return (
      <section>
        <div className="map" ref="map" >
          Map
        </div>
        <span>
          <img src="" alt=""/>
          <h3>{cafe.address} {cafe.city}</h3>
        </span>
      </section>
    )
  }
}

export default withRouter(Map);