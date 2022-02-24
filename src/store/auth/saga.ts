import type { SimpleEffect, SagaIterator } from '@redux-saga/types';
import { AxiosError, AxiosResponse } from 'axios';
import { SagaReturnType, put, call, takeLatest } from 'redux-saga/effects';
import ActionTypes from './enum';
import { httpResponseCreated, httpResponseOK, httpResponseUnprocessableEntity } from '@app/utils/http';
import {
  loginFailure,
  loginLoading,
  loginSuccess,
  registerFailure,
  registerLoading,
  registerSuccess,
  resetAuthState,
  revokeTokenFailure,
  revokeTokenLoading,
  revokeTokenSuccess,
} from './actions';
import AuthService from './service';
import { LoginModel, RegisterModel } from '@app/interfaces/auth';
import { Alert, ToastAndroid } from 'react-native';
import { removeToken, saveToken } from '@utils/token';

// Type definitions of return of result.
type TResponseLogin = SagaReturnType<typeof AuthService.login>;
type TResponseRegister = SagaReturnType<typeof AuthService.register>;

// Types effect.
type LoginEffect = SimpleEffect<typeof ActionTypes.LOGIN_REQUESTED, LoginModel>;
type RegisterEffect = SimpleEffect<typeof ActionTypes.REGISTER_REQUESTED, RegisterModel>;

function* loginRequest({ payload }: LoginEffect): SagaIterator {
  yield put(loginLoading());
  try {
    const response: TResponseLogin = yield call(AuthService.login, payload);
    if (httpResponseOK(response.status)) {
      const token = response.data.token;
      saveToken(token).then(() => {
        console.log('Token has been saved!');
      });
      yield put(loginSuccess(response.data.user));
    }
  } catch (reason) {
    const error = reason as AxiosError<unknown>;
    if (httpResponseUnprocessableEntity(Number(error.response?.status))) {
      // credentials incorrect.
      console.log('login failure: unprocessable entity', reason);
    } else {
      // another reason.
      // yield put(loginFailure());
    }

    yield put(loginFailure());
    // Show toast.
    console.log('reason', reason);
    // ToastAndroid.show('Login failure', ToastAndroid.LONG);
    Alert.alert('Login failure');
  }
}

function* registerRequest({ payload }: RegisterEffect): SagaIterator {
  yield put(registerLoading());
  try {
    const response: TResponseRegister = yield call(AuthService.register, payload);
    if (httpResponseCreated(response.status)) {
      const token = response.data.token;
      saveToken(token).then(() => {
        console.log('Token has been saved!');
      });
      yield put(registerSuccess(response.data.user));
    }
  } catch (reason) {
    const error = reason as AxiosError<unknown>;
    console.log('error', error);
    yield put(registerFailure());
    // Show toast.
    ToastAndroid.show('Register failure', ToastAndroid.SHORT);
  }
}

function* revokeTokenRequest(): SagaIterator {
  yield put(revokeTokenLoading());
  try {
    const response: AxiosResponse = yield call(AuthService.revokeToken);
    if (httpResponseOK(response.status)) {
      yield put(revokeTokenSuccess());
      yield put(resetAuthState());
      removeToken().then(() => console.log('Token has been removed from storage!'));
    }
  } catch (reason) {
    // removeToken();
    yield put(revokeTokenFailure());
    yield put(resetAuthState()); // However reset all state
  }
}

export default function* authSaga(): SagaIterator {
  yield takeLatest(ActionTypes.LOGIN_REQUESTED, loginRequest);
  yield takeLatest(ActionTypes.REGISTER_REQUESTED, registerRequest);
  yield takeLatest(ActionTypes.REVOKE_TOKEN_REQUESTED, revokeTokenRequest);
}
