import { AuthActionTypes } from './types';
import { Action, Dispatch } from 'redux';

export const login = (auth: any) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: AuthActionTypes.SUCCESS,
      payload: auth,
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch): Action => {
    localStorage.removeItem('token');
    return dispatch({
      type: AuthActionTypes.LOGOUT,
    });
  };
};
