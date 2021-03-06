import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 47.606209,
      lng: -122.332069
    },
    zoom: 11
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR-API-KEY"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
