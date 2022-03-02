import type { Effect, SagaIterator, SimpleEffect } from '@redux-saga/types';
import { httpResponseCreated, httpResponseOK } from '@app/utils/http';
import { call, put, SagaReturnType, takeEvery, takeLatest, select } from 'redux-saga/effects';

import {
  createUserFailure,
  createUserLoading,
  createUserSuccess,
  deleteUserFailure,
  deleteUserLoading,
  deleteUserSuccess,
  fetchingUserFailure,
  fetchingUserListFailure,
  fetchingUserListLoading,
  fetchingUserListSuccess,
  fetchingUserLoading,
  fetchingUserSuccess,
  fetchUserListRequest as fetchingUserListAction,
  updateUserFailure,
  updateUserLoading,
  updateUserSuccess,
} from './actions';
import ActionTypes from './enum';
import UserAPI from './service';
import { UserModel } from '@app/interfaces/user';
import { getLastFetchedListUser, getRootUserState } from '@store/user/selectors';
import moment from 'moment';
import { shouldItBeFetch } from '@utils/common';

// Type definitions of return of result.
type APIResponseUserList = SagaReturnType<typeof UserAPI.findAll>;
type APIResponseUser = SagaReturnType<typeof UserAPI.find>;
type APIResponseCreateUser = SagaReturnType<typeof UserAPI.create>;
type APIResponseUpdateUser = SagaReturnType<typeof UserAPI.update>;
type APIResponseDeleteUser = SagaReturnType<typeof UserAPI.delete>;

// Types effect.
type FetchUserListEffect = SimpleEffect<typeof ActionTypes.FETCHING_USER_LIST_REQUESTED, Record<string, string>>;
type CreateUserEffect = SimpleEffect<typeof ActionTypes.CREATE_USER_REQUESTED, UserModel>;
type UpdateUserEffect = SimpleEffect<typeof ActionTypes.UPDATE_USER_REQUESTED, { id: string; body: UserModel }>;
type DeleteUserEffect = SimpleEffect<typeof ActionTypes.DELETE_USER_REQUESTED, string>;

function* fetchUserList({ payload }: FetchUserListEffect): SagaIterator {
  const lastFetched = yield select(getLastFetchedListUser);
  if (shouldItBeFetch(lastFetched)) {
    yield put(fetchingUserListLoading());
    try {
      const response: APIResponseUserList = yield call(UserAPI.findAll, payload);
      if (httpResponseOK(response.status)) {
        const { data } = response;
        yield put(fetchingUserListSuccess(data));
      }
    } catch (error) {
      yield put(fetchingUserListFailure());
    }
  }
}

function* fetchUser({ payload }: Effect<{ id: number }>): SagaIterator {
  yield put(fetchingUserLoading());
  try {
    const response: APIResponseUser = yield call(UserAPI.find, payload);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(fetchingUserSuccess(data));
    }
  } catch (error) {
    yield put(fetchingUserFailure());
  }
}

/**
 * Create user
 * @param { payload } Request user body
 */
function* createUser({ payload }: CreateUserEffect): SagaIterator {
  yield put(createUserLoading());
  try {
    const response: APIResponseCreateUser = yield call(UserAPI.create, payload);
    if (httpResponseCreated(response.status)) {
      const { data } = response;
      yield put(createUserSuccess(data));

      // re-fetch user list
      yield put(fetchingUserListAction());

      // close drawer
      // yield put(setDialogAddEditUser(false, null));
    }
  } catch (error) {
    yield put(createUserFailure());
  }
}

/**
 * Update user by id
 * @param { payload } Request user body
 */
function* updateUser({ payload }: UpdateUserEffect): SagaIterator {
  yield put(updateUserLoading());
  try {
    const response: APIResponseUpdateUser = yield call(UserAPI.update, payload.id, payload.body);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(updateUserSuccess(data));

      // re-fetch user list
      yield put(fetchingUserListAction());

      // close drawer
      // yield put(setDialogAddEditUser(false, null));
    }
  } catch (error) {
    yield put(updateUserFailure());
  }
}

/**
 * Delete user by id
 * @param payload
 */
function* deleteUser({ payload }: DeleteUserEffect): SagaIterator {
  yield put(deleteUserLoading());
  try {
    const response: APIResponseDeleteUser = yield call(UserAPI.delete, payload /* payload is a string userId */);
    if (httpResponseOK(response.status)) {
      yield put(deleteUserSuccess());

      // re-fetch user list
      yield put(fetchingUserListAction());

      // close dialog detail user.
      // yield put(setDialogDetailUser(false, null));
    }
  } catch (error) {
    yield put(deleteUserFailure());
  }
}

export default function* userSaga(): SagaIterator {
  // yield takeEvery(ActionTypes.SET_DIALOG_ADD_EDIT_USER_REQUESTED, setDialogAddEditUserSaga);
  yield takeEvery(ActionTypes.FETCHING_USER_LIST_REQUESTED, fetchUserList);
  yield takeLatest(ActionTypes.CREATE_USER_REQUESTED, createUser);
  yield takeLatest(ActionTypes.UPDATE_USER_REQUESTED, updateUser);
  yield takeEvery(ActionTypes.FETCHING_USER_REQUESTED, fetchUser);
  yield takeLatest(ActionTypes.DELETE_USER_REQUESTED, deleteUser);
}
