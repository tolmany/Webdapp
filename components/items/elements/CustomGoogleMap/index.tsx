import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '936px',
  height: '480px',
  borderRadius: '20px',
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="w-full h-full flex">
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233,
          }}
          fullscreenControl={false}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBKrCHuYKL5B_ba1xHkhaRVHMfEqgTxkOw',
})(MapContainer);
