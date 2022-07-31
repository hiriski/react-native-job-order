import { AnyAction } from 'redux';
import Types from './enum';
import { User } from '@/interfaces/user';
import { LoginModel, LoginWithSocialAccountModel, RegisterModel } from '@/interfaces/auth';
import { AuthSocialProvider } from '@/enum/social-provider';

// Actions definition
interface LoginRequested {
  type: typeof Types.LOGIN_REQUESTED;
  payload: LoginModel;
}
interface LoginLoading {
  type: typeof Types.LOGIN_LOADING;
}
interface LoginFailure {
  type: typeof Types.LOGIN_FAILURE;
}
interface LoginSuccess {
  type: typeof Types.LOGIN_SUCCESS;
  payload: User | null;
}

interface RegisterRequested {
  type: typeof Types.REGISTER_REQUESTED;
  payload: RegisterModel;
}
interface RegisterLoading {
  type: typeof Types.REGISTER_LOADING;
}
interface RegisterFailure {
  type: typeof Types.REGISTER_FAILURE;
}
interface RegisterSuccess {
  type: typeof Types.REGISTER_SUCCESS;
  payload: User | null;
}
interface LoginWithSocialAccountRequested {
  type: typeof Types.LOGIN_WITH_SOCIAL_ACCOUNT_REQUESTED;
  payload: LoginWithSocialAccountModel;
}

interface LoginWithSocialAccountLoading {
  type: typeof Types.LOGIN_WITH_SOCIAL_ACCOUNT_LOADING;
}

interface LoginWithSocialAccountFailure {
  type: typeof Types.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE;
}
interface LoginWithSocialAccountSuccess {
  type: typeof Types.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS;
  payload: { provider: keyof AuthSocialProvider; user: User };
}
interface RevokeTokenLoading {
  type: typeof Types.REVOKE_TOKEN_LOADING;
}
interface RevokeTokenFailure {
  type: typeof Types.REVOKE_TOKEN_FAILURE;
}
interface ResetAuthState {
  type: typeof Types.RESET_AUTH_STATE;
}

// Union action types
export type AuthAction =
  | LoginRequested
  | LoginLoading
  | LoginFailure
  | LoginSuccess
  | RegisterRequested
  | RegisterLoading
  | RegisterFailure
  | RegisterSuccess
  | LoginWithSocialAccountRequested
  | LoginWithSocialAccountLoading
  | LoginWithSocialAccountFailure
  | LoginWithSocialAccountSuccess
  | RevokeTokenLoading
  | RevokeTokenFailure
  | ResetAuthState;

// Actions creators.
export const loginRequest = (payload: LoginModel): LoginRequested => ({
  type: Types.LOGIN_REQUESTED,
  payload,
});
export const loginFailure = (): LoginFailure => ({
  type: Types.LOGIN_FAILURE,
});
export const loginLoading = (): LoginLoading => ({
  type: Types.LOGIN_LOADING,
});
export const loginSuccess = (payload: User): LoginSuccess => ({
  type: Types.LOGIN_SUCCESS,
  payload,
});

export const registerRequest = (payload: RegisterModel): RegisterRequested => ({
  type: Types.REGISTER_REQUESTED,
  payload,
});
export const registerLoading = (): RegisterLoading => ({
  type: Types.REGISTER_LOADING,
});
export const registerFailure = (): RegisterFailure => ({
  type: Types.REGISTER_FAILURE,
});
export const registerSuccess = (payload: User): RegisterSuccess => ({
  type: Types.REGISTER_SUCCESS,
  payload,
});

// Login with social account.
export const loginWithSocialAccount = (payload: LoginWithSocialAccountModel): LoginWithSocialAccountRequested => ({
  type: Types.LOGIN_WITH_SOCIAL_ACCOUNT_REQUESTED,
  payload,
});
export const loginWithSocialAccountSuccess = (
  provider: keyof AuthSocialProvider,
  user: User,
): LoginWithSocialAccountSuccess => ({
  type: Types.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS,
  payload: { provider, user },
});

export const revokeTokenRequest = (): AnyAction => ({
  type: Types.REVOKE_TOKEN_REQUESTED,
});
export const revokeTokenLoading = (): AnyAction => ({
  type: Types.REVOKE_TOKEN_LOADING,
});
export const revokeTokenFailure = (): AnyAction => ({
  type: Types.REVOKE_TOKEN_FAILURE,
});
export const revokeTokenSuccess = (): AnyAction => ({
  type: Types.REVOKE_TOKEN_SUCCESS,
});

/** Reset auth state */
export const resetAuthState = (): AnyAction => ({
  type: Types.RESET_AUTH_STATE,
});
