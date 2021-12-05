export interface Auth {
  email: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  roles: [string];
}

export interface IresponseToken {
  user: User;
  iat: string;
  exp: string;
}

export enum AuthActionTypes {
  REQUEST = '@@autentication/REQUEST',
  SUCCESS = '@@autentication/SUCCESS',
  FAIL = '@@autentication/FAIL',
  LOGOUT = '@@autentication/LOGOUT',
}

interface IAuth {
  user?: User;
  loggedIn: boolean;
}

export interface authState {
  readonly data: IAuth;
}
