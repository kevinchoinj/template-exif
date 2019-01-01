import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import classNames from 'classnames';

const renderDropzoneInput = (field) => {
  //const files = field.input.value;
  return (
    <div className="form_dropzone__wrapper">
      <Dropzone onDrop={( filesToUpload, e ) => field.input.onChange(filesToUpload)}>
        {({getRootProps, getInputProps, isDragActive}) => {
          return (
            <div
              {...getRootProps()}
              className={classNames('dropzone', {'dropzone--isActive': isDragActive})}
            >
              <input {...getInputProps()} />
              {
                isDragActive ?
                  <p>Drop files here...</p> :
                  <p>Try dropping some files here, or click to select files to upload.</p>
              }
            </div>
          );
        }}
      </Dropzone>
    </div>
  );
};

class ImagePostForm extends React.Component {
  render() {
    const { handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>

        <Field
          name="image"
          component={renderDropzoneInput}
        />
        <button
          type="submit"
          disabled = {pristine || submitting}
        >
          Submit
        </button>


      </form>
    );
  }
}

function mapStateToProps(state, prop){
  return{
    initialValues: {
      image: '',
    }
  };
}
function mapDispatchToProps(dispatch){
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({
    form: 'postImage',
    enableReinitialize: true,
  })(ImagePostForm)
);
