// Alert action types.
import { AlertActionTypes } from './alert-action-types.enum';

// Union actions type.
import { AlertActions } from './alert-actions';

// Interfaces.
import { IPayloadSetAlert } from '../alert.interface';

const DEFAULT_AHDR = 4000;
const DEFAULT_ALERT_VARIANT = 'filled';

// Alert state definition.
export interface AlertState extends IPayloadSetAlert {}

// Init state.
const initialState: AlertState = {
  show: false,
  messages: null,
  severity: undefined,
  autoHideDuration: DEFAULT_AHDR,
  variant: 'filled',
};

// Alert reducer.
export const alertReducer = (state: AlertState = initialState, action: AlertActions): AlertState => {
  switch (action.type) {
    case AlertActionTypes.SET_ALERT:
      return {
        ...state,
        show: action.payload.show,
        messages: action.payload.messages,
        severity: action.payload.severity,
        autoHideDuration: action.payload.autoHideDuration ?? DEFAULT_AHDR,
        variant: action.payload.variant ?? DEFAULT_ALERT_VARIANT,
      };

    case AlertActionTypes.RESET_ALERT:
      return initialState;
    default:
      return state;
  }
};
