import { Reducer } from 'redux';

import { AlertActionTypes, alertState } from './types';
export const initialState: alertState = {
  data: {
    type: '',
    message: '',
  },
};

const reducer: Reducer<alertState> = (state = initialState, action) => {
  switch (action.type) {
    case AlertActionTypes.SUCCESS: {
      return {
        ...state,
        data: {
          type: 'alert-success',
          message: action.payload,
        },
      };
    }
    case AlertActionTypes.ERROR: {
      return {
        ...state,
        data: {
          type: 'alert-error',
          message: action.payload,
        },
      };
    }
    case AlertActionTypes.CLEAR: {
      return {
        ...state,
        data: {
          type: '',
          message: '',
        },
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
