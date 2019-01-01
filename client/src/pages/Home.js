import React, { Component } from 'react';
import ExifData from 'components/ExifData';
import ExifDataDisplay from 'components/ExifDataDisplay';

class Home extends Component {
  render() {

    return (
      <div>
        Home
        <ExifData/>
        <ExifDataDisplay/>
      </div>
    );
  }
}

export default Home;
