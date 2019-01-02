import React, { Component } from 'react';
import ExifData from 'components/ExifData';
import ExifDataDisplay from 'components/ExifDataDisplay';
import GoogleMap from 'components/GoogleMap';

class Home extends Component {
  render() {

    return (
      <div>
        Home
        <ExifData/>
        <ExifDataDisplay/>
        <GoogleMap/>
      </div>
    );
  }
}

export default Home;
