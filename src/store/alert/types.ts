export interface Alert {
  message: string;
}

export enum AlertActionTypes {
  SUCCESS = '@@alert/ALERT_SUCCESS',
  ERROR = '@@alert/ALERT_ERROR',
  CLEAR = '@@alert/ALERT_CLEAR',
}

interface IAlert {
  type: '' | 'alert-success' | 'alert-error' | 'alert-warning' | 'alert-info';
  message: string;
}

export interface alertState {
  readonly data: IAlert;
}
