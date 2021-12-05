export interface Auth {
  email: string;
  password: string;
}

interface User {
  email: string;
  name: string;
}

export enum AuthActionTypes {
  REQUEST = '@@autentication/REQUEST',
  SUCCESS = '@@autentication/SUCCESS',
  FAIL = '@@autentication/FAIL',
}

interface IAuth {
  user?: User;
  loggedIn: boolean;
}

export interface authState {
  readonly data: IAuth;
  readonly loading: boolean;
}
