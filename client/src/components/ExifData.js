import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as exifActions from 'actions/exif';
import ImagePostForm from 'components/forms/ImagePostForm';

class ExifData extends Component {

  onSubmit = values => {
    this.props.exifActions.submitExifData(values);
  }

  render() {

    return (
      <div>
        <ImagePostForm onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    exifActions: bindActionCreators(exifActions, dispatch),
  }),
)(ExifData);
