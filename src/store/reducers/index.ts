import { combineReducers } from 'redux';

import alert from './../alert/reducer';
import auth from './../authentication/reducer';

const rootReducer = combineReducers({
  alert,
  auth,
});

export default rootReducer;
