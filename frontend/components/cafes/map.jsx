import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import MarkerManager from '../../util/marker_manager';

class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  


  componentDidMount() {
    const MapOptions = {
      center: { lat: this.props.cafe.lat, lng: this.props.cafe.long },
      zoom: 10
    };
    const map = this.refs.map;
    this.map = new google.maps.Map(map, MapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleClick);
    if (this.props.singleCafe) {
      this.props.fetchCafe(this.props.cafe.id);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.cafes);
    }
  }

  componentDidUpdate() {
    if (this.props.singleCafe) {
      // const targetCafeKey = Object.keys(this.props.cafe);
      const targetCafe = this.props.cafe;
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
    this.props.history.push(`cafes/${cafe.id}`);
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
        <section className="map-container">
        <div className="map" ref="map" >
          Map
        </div>
        <span className="map-address">
          <img className="location-icon-img" src={window.locationIcon} alt="location icon"/>
          <Link className="address-link" to= {`/cafes/${cafe.id}`}>{cafe.address} {cafe.city}, {cafe.location.name}</Link>
        </span>
      </section>
      )
    
  }
}

export default withRouter(Map);