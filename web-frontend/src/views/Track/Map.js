import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import PropTypes from 'prop-types';

const mapStyles = {
  width: '90%',
  height: '70%'
};

class MapContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  static get propTypes() { 
    return { 
        google: PropTypes.any
    }; 
}

  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: 55.882310,
            lng: -4.270780
          }}
        >
         <Marker
          onClick={this.onMarkerClick}
          name={'This is test name'}
        />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAelc6dAoKsJYQqaFQUQE59e-DT22-TBOs'
})(MapContainer);