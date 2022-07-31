import { IUser } from '@/modules/user/user.interface';
import { AuthActionTypes } from './auth-action-types.enum';
import { AuthActions } from './auth-actions';

export interface AuthState {
  login_loading: boolean;
  login_failed: boolean;
  login_errorMessages?: Array<string> | string | null;
  login_success: boolean;

  revokeToken_loading: boolean;
  revokeToken_failed: boolean;

  isAuthenticated: boolean;

  authenticatedUser: IUser | null;
}

const initialState: AuthState = {
  login_loading: false,
  login_failed: false,
  login_errorMessages: undefined,
  login_success: false,

  revokeToken_loading: false,
  revokeToken_failed: false,

  isAuthenticated: false,
  authenticatedUser: null,
};

export const authReducer = (state: AuthState = initialState, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_LOADING:
      return {
        ...state,
        login_loading: action.payload,
      };

    case AuthActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        login_failed: action.payload.status,
        login_errorMessages: action.payload.errorMessages,
      };

    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        login_loading: false,
        login_failed: false,
        login_success: true,

        isAuthenticated: true,
        authenticatedUser: action.payload,
      };

    case AuthActionTypes.REVOKE_TOKEN_LOADING:
      return {
        ...state,
        revokeToken_loading: action.payload,
      };

    case AuthActionTypes.REVOKE_TOKEN_FAILURE:
      return {
        ...state,
        revokeToken_failed: action.payload,
      };

    case AuthActionTypes.REVOKE_TOKEN_SUCCESS:
      return {
        ...state,
        revokeToken_loading: false,
        revokeToken_failed: false,
      };

    default:
      return state;
  }
};
