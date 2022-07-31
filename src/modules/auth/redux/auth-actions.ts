import { IRequestLogin } from '@/modules/auth/auth.interface';
import { IUser } from '@/modules/user/user.interface';
import { AuthActionTypes } from './auth-action-types.enum';

// Action definitions
export interface IAuthLoginRequested {
  type: AuthActionTypes.LOGIN_REQUESTED;
  payload: IRequestLogin;
}

export interface IAuthLoginLoading {
  type: AuthActionTypes.LOGIN_LOADING;
  payload: boolean;
}

export interface IAuthLoginFailure {
  type: AuthActionTypes.LOGIN_FAILURE;
  payload: { status: boolean; errorMessages?: Array<string> | string };
}

export interface IAuthLoginSuccess {
  type: AuthActionTypes.LOGIN_SUCCESS;
  payload: IUser;
}

export interface IAuthRevokeTokenRequested {
  type: AuthActionTypes.REVOKE_TOKEN_REQUESTED;
}

export interface IAuthRevokeTokenLoading {
  type: AuthActionTypes.REVOKE_TOKEN_LOADING;
  payload: boolean;
}

export interface IAuthRevokeTokenFailure {
  type: AuthActionTypes.REVOKE_TOKEN_FAILURE;
  payload: boolean;
}

export interface IAuthRevokeTokenSuccess {
  type: AuthActionTypes.REVOKE_TOKEN_SUCCESS;
}

export interface IAuthResetAuthState {
  type: AuthActionTypes.RESET_AUTH_STATE;
}

// Union action types
export type AuthActions =
  | IAuthLoginRequested
  | IAuthLoginLoading
  | IAuthLoginFailure
  | IAuthLoginSuccess
  | IAuthRevokeTokenRequested
  | IAuthRevokeTokenLoading
  | IAuthRevokeTokenFailure
  | IAuthRevokeTokenSuccess
  | IAuthResetAuthState;

// Actions creators.
export const auth_actionLogin = (payload: IRequestLogin): IAuthLoginRequested => ({
  type: AuthActionTypes.LOGIN_REQUESTED,
  payload,
});

export const auth_actionLoginLoading = (payload: boolean): IAuthLoginLoading => ({
  type: AuthActionTypes.LOGIN_LOADING,
  payload,
});

export const auth_actionLoginFailure = (
  status: boolean,
  errorMessages?: Array<string> | string,
): IAuthLoginFailure => ({
  type: AuthActionTypes.LOGIN_FAILURE,
  payload: { status, errorMessages },
});

export const auth_actionLoginSuccess = (payload: IUser): IAuthLoginSuccess => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload,
});

export const auth_actionRevokeToken = (): IAuthRevokeTokenRequested => ({
  type: AuthActionTypes.REVOKE_TOKEN_REQUESTED,
});

export const auth_actionRevokeTokenLoading = (payload: boolean): IAuthRevokeTokenLoading => ({
  type: AuthActionTypes.REVOKE_TOKEN_LOADING,
  payload,
});

export const auth_actionRevokeTokenFailure = (payload: boolean): IAuthRevokeTokenFailure => ({
  type: AuthActionTypes.REVOKE_TOKEN_FAILURE,
  payload,
});

export const auth_actionRevokeTokenSuccess = (): IAuthRevokeTokenSuccess => ({
  type: AuthActionTypes.REVOKE_TOKEN_SUCCESS,
});

export const auth_actionResetAuthState = (): IAuthResetAuthState => ({
  type: AuthActionTypes.RESET_AUTH_STATE,
});
