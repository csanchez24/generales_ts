import { combineReducers } from 'redux';
import { alertState } from '../alert/types';
import { authState } from '../authentication/types';

import alert from './../alert/reducer';
import auth from './../authentication/reducer';

export interface IGlobalState {
  alert: alertState;
  auth: authState;
}

const rootReducer = combineReducers({
  alert,
  auth,
});

export default rootReducer;
