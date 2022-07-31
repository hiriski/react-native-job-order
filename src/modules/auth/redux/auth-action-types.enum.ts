// Auth action types

export enum AuthActionTypes {
  LOGIN_REQUESTED = '@auth/LOGIN_REQUESTED',
  LOGIN_LOADING = '@auth/LOGIN_LOADING',
  LOGIN_FAILURE = '@auth/LOGIN_FAILURE',
  LOGIN_SUCCESS = '@auth/LOGIN_SUCCESS',

  REVOKE_TOKEN_REQUESTED = '@auth/REVOKE_TOKEN_REQUESTED',
  REVOKE_TOKEN_LOADING = '@auth/REVOKE_TOKEN_LOADING',
  REVOKE_TOKEN_FAILURE = '@auth/REVOKE_TOKEN_FAILURE',
  REVOKE_TOKEN_SUCCESS = '@auth/REVOKE_TOKEN_SUCCESS',

  RESET_AUTH_STATE = '@auth/RESET_AUTH_STATE',
}
