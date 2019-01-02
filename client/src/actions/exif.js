var EXIF = require('exif-js');

export const STORE_EXIF_DATA = Symbol('STORE_EXIF_DATA');

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

const receiveExifData = (image) => {
  return (dispatch) => {
    EXIF.getData(image, function() {
      let exifData = this.exifdata;
      dispatch(receiveGPS(exifData));
    });
  };
};

const b64toBlob = (dataURI) => {
  let byteString = atob(dataURI.split(',')[1]);
  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);

  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/jpeg' });
};
export const storeExifData = (data) => {
  return{
    type: STORE_EXIF_DATA,
    data: data,
  };
};

export const receiveGPS = (data) => {
  return (dispatch) => {
    const gPSLatitude = data.GPSLatitude;
    const gPSLatitudeDirection = data.GPSLatitudeRef;
    const gPSLongitude = data.GPSLongitude;
    const gPSLongitudeDirection = data.GPSLongitudeRef;

    let latDegrees;
    let latMinutes;
    let latSeconds;
    let latDirection;
    let longDegrees;
    let longMinutes;
    let longSeconds;
    let longDirection;

    if (gPSLatitude && gPSLongitude) {
      latDegrees = gPSLatitude[0];
      latMinutes = gPSLatitude[1];
      latSeconds = gPSLatitude[2];
      latDirection = gPSLatitudeDirection;
      longDegrees = gPSLongitude[0];
      longMinutes = gPSLongitude[1];
      longSeconds = gPSLongitude[2];
      longDirection = gPSLongitudeDirection;
    }

    let latValue;
    let longValue;

    latValue = convertDMSToDD( latDegrees, latMinutes, latSeconds, latDirection);
    longValue = convertDMSToDD( longDegrees, longMinutes, longSeconds, longDirection);

    dispatch(storeExifData({
      Latitude: latValue,
      Longitude: longValue,
    }));
  };
};

const convertDMSToDD = (degrees, minutes, seconds, direction) => {
  var dd = degrees + minutes/60 + seconds/(60*60);
  if (direction === 'S' || direction === 'W') {
    dd = dd * -1;
  }
  return dd;
};