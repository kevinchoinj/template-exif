var EXIF = require('exif-js');

export const STORE_EXIF_DATA = Symbol('STORE_EXIF_DATA');

const b64toBlob = (dataURI) => {
  let byteString = atob(dataURI.split(',')[1]);
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/jpeg' });
};

export const submitExifData = (values) => {
  return (dispatch) => {
    let file = values.image[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      dispatch(receiveExifData(b64toBlob(event.target.result)));
    };
    reader.readAsDataURL(file);
  };
};

export const receiveExifData = (image) => {
  return (dispatch) => {
    EXIF.getData(image, function() {
      let exifData = this.exifdata;
      dispatch(storeExifData(exifData));
    });
  };
};

export const storeExifData = (data) => {
  return{
    type: STORE_EXIF_DATA,
    data: data,
  };
};