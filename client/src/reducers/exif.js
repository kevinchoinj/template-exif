import {
  STORE_EXIF_DATA,
} from 'actions/exif';

const DEFAULT_STATE={
  exifData: {},
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case STORE_EXIF_DATA:
    return state = {
      ...state,
      exifData: payload.data
    };
  default:
    return state;
  }
};


