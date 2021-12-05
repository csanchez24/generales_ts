import { Reducer } from 'redux';

import { AuthActionTypes, authState } from './types';
export const initialState: authState = {
  data: {
    loggedIn: false,
  },
  loading: false,
};

const reducer: Reducer<authState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.REQUEST: {
      return {
        ...state,
        data: {
          loggedIn: false,
        },
        loading: true,
      };
    }
    case AuthActionTypes.SUCCESS: {
      return {
        ...state,
        data: {
          loggedIn: true,
        },
        loading: false,
      };
    }
    case AuthActionTypes.FAIL: {
      return {
        ...state,
        data: {
          loggedIn: false,
        },
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
