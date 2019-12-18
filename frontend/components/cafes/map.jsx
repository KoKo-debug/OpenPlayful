import React from 'react';

const MapOptions = {
  center: { lat: 37.7758, lng: -122.425 },
  zoom: 13
};

class Map extends React.Component {

  componentDidMount() {
    const map = this.refs.map;
    this.map = new google.maps.Map(map, MapOptions);
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

export default Map;