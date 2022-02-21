import Types from './enum';
import { AuthAction } from './actions';
import { User } from '@app/interfaces/user';
import { AuthSocialProvider } from '@app/enum/social-provider';

export interface AuthState {
  user?: User | null;
  isAuthenticated: boolean;
  provider?: keyof AuthSocialProvider | null;

  loginLoading: boolean;
  loginFailure: boolean;
  loginSuccess: boolean;

  registerLoading: boolean;
  registerFailure: boolean;
  registerSuccess: boolean;
}

const initialState = {
  user: null,
  isAuthenticated: false,
  provider: undefined,

  loginLoading: false,
  loginFailure: false,
  loginSuccess: false,

  registerLoading: false,
  registerFailure: false,
  registerSuccess: false,
};

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    /** Login */
    case Types.LOGIN_LOADING:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loginLoading: true,
        loginFailure: false,
        loginSuccess: false,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loginLoading: false,
        loginFailure: false,
        loginSuccess: true,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loginLoading: false,
        loginFailure: true,
        loginSuccess: false,
      };

    /** Register */
    case Types.REGISTER_LOADING:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        registerLoading: true,
        registerFailure: false,
        registerSuccess: false,
      };
    case Types.REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        registerLoading: false,
        registerFailure: false,
        registerSuccess: true,
      };
    case Types.REGISTER_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        registerLoading: false,
        registerFailure: true,
        registerSuccess: false,
      };

    /** Login with social account */
    case Types.LOGIN_WITH_SOCIAL_ACCOUNT_LOADING:
      return {
        ...state,
        user: null,
        provider: undefined,
        isAuthenticated: false,
        loginLoading: true,
        loginFailure: false,
        loginSuccess: false,
      };
    case Types.LOGIN_WITH_SOCIAL_ACCOUNT_FAILURE:
      return {
        ...state,
        user: null,
        provider: undefined,
        isAuthenticated: false,
        loginLoading: false,
        loginFailure: true,
        loginSuccess: false,
      };
    case Types.LOGIN_WITH_SOCIAL_ACCOUNT_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        provider: action.payload.provider,
        isAuthenticated: true,
        loginLoading: false,
        loginFailure: false,
        loginSuccess: true,
      };

    // (reset auth state)
    case Types.RESET_AUTH_STATE:
      return initialState;
    default:
      return state;
  }
};
