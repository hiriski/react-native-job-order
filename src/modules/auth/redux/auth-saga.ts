import type { SimpleEffect, SagaIterator } from '@redux-saga/types';
import axios, { AxiosResponse } from 'axios';
import { SagaReturnType, put, call, takeLatest } from 'redux-saga/effects';

import { removeToken, saveToken } from '@/utils/token';
// import { clearAsyncStorage } from '@/utils/storage';

// Enum action types.
import { AuthActionTypes } from './auth-action-types.enum';
import { IRequestLogin } from '../auth.interface';
import AuthApiService from '@/modules/auth/services/auth-api.service';
import {
  auth_actionLoginFailure,
  auth_actionLoginLoading,
  auth_actionLoginSuccess,
  auth_actionResetAuthState,
  auth_actionRevokeTokenFailure,
  auth_actionRevokeTokenLoading,
  auth_actionRevokeTokenSuccess,
} from './auth-actions';
import { alert_actionSetAlert } from '@/modules/alert/redux/alert-actions';

// Type definitions of return of result.
type ResponseLogin = SagaReturnType<typeof AuthApiService.loginWithEmailAndPassword>;

// Types effect.
type LoginEffect = SimpleEffect<typeof AuthActionTypes.LOGIN_REQUESTED, IRequestLogin>;
// type RevokeTokenEffect = SimpleEffect<typeof AuthActionTypes.REVOKE_TOKEN_REQUESTED, undefined>;

function* saga_login({ payload }: LoginEffect): SagaIterator {
  yield put(auth_actionLoginLoading(true));
  try {
    const { status, data }: ResponseLogin = yield call(AuthApiService.loginWithEmailAndPassword, payload);
    if (status === 200) {
      const token = data.token;
      saveToken(token).then(() => {
        console.log('✅ Token has been saved!');
      });
      yield put(auth_actionLoginSuccess(data.user));
      yield put(auth_actionLoginLoading(false));
    }
  } catch (reason) {
    // check if the error was thrown from axios
    if (axios.isAxiosError(reason)) {
      // do something
      if (reason.response?.status === 422) {
        console.log('Response error', reason.response);
        yield put(auth_actionLoginLoading(false));
        yield put(auth_actionLoginFailure(true, reason.response?.data));
        yield put(
          alert_actionSetAlert({
            show: true,
            messages: 'Email atau Kata Sandi yang kamu masukan salah!',
            severity: 'error',
            autoHideDuration: 5000,
          }),
        );
      } else {
        // Another server error
        yield put(auth_actionLoginLoading(false));
        yield put(auth_actionLoginFailure(true, 'Internal server error!'));
      }
    } else {
      // do something else
      // or creating a new error
      yield put(auth_actionLoginLoading(false));
      yield put(auth_actionLoginFailure(true, 'Internal server error!'));
      yield put(
        alert_actionSetAlert({
          show: true,
          messages: 'Internal server error!',
          severity: 'error',
          autoHideDuration: 5000,
        }),
      );
      throw new Error('different error than axios');
    }
  }
}

function* saga_revokeToken(): SagaIterator {
  yield put(auth_actionRevokeTokenLoading(true));
  try {
    const { status }: AxiosResponse<undefined> = yield call(AuthApiService.revokeToken);
    if (status === 200) {
      yield put(auth_actionRevokeTokenSuccess());
      yield put(auth_actionRevokeTokenLoading(false));

      yield put(auth_actionResetAuthState()); // However reset all state

      removeToken().then(() => console.log('Token has been removed from storage!'));

      // clearAsyncStorage();
    }
  } catch (reason) {
    yield put(auth_actionRevokeTokenLoading(false));
    yield put(auth_actionRevokeTokenFailure(true));
    yield put(auth_actionResetAuthState()); // However reset all state
    // clearAsyncStorage();
  }
}

// Auth saga.
export function* authSaga() {
  yield takeLatest(AuthActionTypes.LOGIN_REQUESTED, saga_login);
  yield takeLatest(AuthActionTypes.REVOKE_TOKEN_REQUESTED, saga_revokeToken);
}
