// Enum action types.
import { AlertActionTypes } from './alert-action-types.enum';

// Intefaces.
import { IPayloadSetAlert } from '@/modules/alert/alert.interface';

interface IAlertSetAlert {
  type: typeof AlertActionTypes.SET_ALERT;
  payload: IPayloadSetAlert;
}

interface IAlertResetAlert {
  type: typeof AlertActionTypes.RESET_ALERT;
}

// Union actions type.
export type AlertActions = IAlertSetAlert | IAlertResetAlert;

// Actions creator.
export const alert_actionSetAlert = (payload: IPayloadSetAlert): IAlertSetAlert => ({
  type: AlertActionTypes.SET_ALERT,
  payload,
});

export const alert_actionResetAlert = (): IAlertResetAlert => ({
  type: AlertActionTypes.RESET_ALERT,
});
