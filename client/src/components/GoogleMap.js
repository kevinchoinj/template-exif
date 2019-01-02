import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

import {
  selectCoordinates,
} from 'reducers';

let json = require('config.json');

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 0,
      lng: 0,
    },
    zoom: 18
  };

  render() {
    const {
      coordinates,
    } = this.props;
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <div onClick={()=>console.log(coordinates)}>
          coordinates
        </div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: json.googleMapsKey }}
          defaultCenter={coordinates}
          defaultZoom={this.props.zoom}
          key={coordinates.lat}
        >

        </GoogleMapReact>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    coordinates: selectCoordinates(state),
  }),
  dispatch => ({
  }),
)(SimpleMap);
