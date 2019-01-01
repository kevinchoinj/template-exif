import { reducer as reducerForm } from 'redux-form';
import exif from 'reducers/exif';

const reducers={
  form: reducerForm,
  exif,
};

export default reducers;