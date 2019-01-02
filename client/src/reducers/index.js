import { reducer as reducerForm } from 'redux-form';
import exif from 'reducers/exif';
import {createSelector} from 'reselect';

const reducers={
  form: reducerForm,
  exif,
};

export default reducers;

/* - current GPS - */
export const selectCurrentGPS = (state) => state.exif.exifData;

export const selectCurrentLongitude = createSelector(
  selectCurrentGPS,
  (currentGPS) => currentGPS.Longitude ? currentGPS.Longitude : ''
);

export const selectCurrentLatitude = createSelector(
  selectCurrentGPS,
  (currentGPS) => currentGPS.Latitude ? currentGPS.Latitude: ''
);

export const selectCoordinates = createSelector(
  selectCurrentLatitude,
  selectCurrentLongitude,
  (latitude, longitude) => {
    return {
      lat: Number(latitude), lng: Number(longitude)};
  }
);

