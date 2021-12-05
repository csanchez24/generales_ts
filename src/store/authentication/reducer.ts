import { Reducer } from 'redux';
import jwt_decode from 'jwt-decode';
import { User, AuthActionTypes, authState, IresponseToken } from './types';

const user: User = localStorage.getItem('token')
  ? (jwt_decode(localStorage.getItem('token') as string) as IresponseToken).user
  : ({} as User);

const initialState: authState = localStorage.getItem('token')
  ? { data: { loggedIn: true, user } }
  : { data: { loggedIn: false } };

const reducer: Reducer<authState> = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.SUCCESS: {
      return {
        ...state,
        data: {
          loggedIn: true,
          user: action.payload,
        },
      };
    }
    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        data: {
          loggedIn: false,
        },
      };
    }
    default: {
      return state;
    }
  }
};
export default reducer;
