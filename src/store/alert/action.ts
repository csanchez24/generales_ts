import { Alert, AlertActionTypes } from './types';

import { Action, Dispatch } from 'redux';

export const success = (alert: Alert) => {
  return (dispatch: Dispatch): Action => {
    return dispatch({
      type: AlertActionTypes.SUCCESS,
      payload: alert,
    });
  };
};

export const error = (alert: Alert) => {
  return (dispatch: Dispatch): Action => {
    return dispatch({
      type: AlertActionTypes.ERROR,
      payload: alert,
    });
  };
};

export const clear = () => {
  return (dispatch: Dispatch): Action => {
    return dispatch({
      type: AlertActionTypes.CLEAR,
    });
  };
};
