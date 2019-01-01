import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as exifActions from 'actions/exif';

class ExifDataDisplay extends Component {

  render() {

    const {
      exifData,
    } = this.props;

    return (
      <div>
        display
        <br/>
        {JSON.stringify(exifData)}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    exifData: state.exif.exifData,
  }),
  dispatch => ({
    exifActions: bindActionCreators(exifActions, dispatch),
  }),
)(ExifDataDisplay);
