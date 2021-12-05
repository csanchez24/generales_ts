import { Auth, AuthActionTypes } from './types';

import { Action, Dispatch } from 'redux';
import { AlertActionTypes } from '../alert/types';

export const login = (auth: Auth) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: AuthActionTypes.REQUEST,
    });
    try {
      //make call to api
      dispatch({
        type: AuthActionTypes.SUCCESS,
        payload: auth,
      });
    } catch (error) {
      dispatch({
        type: AuthActionTypes.FAIL,
        payload: error,
      });
      dispatch({
        type: AlertActionTypes.ERROR,
        payload: error,
      });
    }
  };
};
