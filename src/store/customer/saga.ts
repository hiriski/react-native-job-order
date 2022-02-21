import type { Effect, SagaIterator } from '@redux-saga/types';
import { TCreateCustomer } from '@app/interface/customer';
import { TRequestMasterData } from '@app/interface/master-data';
import { httpResponseCreated, httpResponseOK } from '@src/utils/http';
import { scrollToTop } from '@app/utils/ui';
import { SagaReturnType, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import Swal from 'sweetalert2';

import {
  createCustomerFailure,
  createCustomerLoading,
  createCustomerSuccess,
  deleteCustomerFailure,
  deleteCustomerLoading,
  deleteCustomerSuccess,
  fetchCustomer as fetchCustomerAction,
  fetchCustomerList as fetchListCustomerAction,
  fetchingCustomerFailure,
  fetchingCustomerListSuccess,
  fetchingCustomerLoading,
  fetchingCustomerSuccess,
  setDialogDetaiLCustomer,
  setDrawerAddEditCustomer,
  updateCustomerFailure,
  updateCustomerLoading,
  updateCustomerSuccess,
} from './actions';
import * as ActionTypes from './constants';
import CustomerAPI from './service';

// Type definitions of return of result.
type APIResponseCustomerList = SagaReturnType<typeof CustomerAPI.findAll>;
type APIResponseCustomer = SagaReturnType<typeof CustomerAPI.find>;
type APIResponseCreateCustomer = SagaReturnType<typeof CustomerAPI.create>;
type APIResponseUpdateCustomer = SagaReturnType<typeof CustomerAPI.update>;
type APIResponseDeleteCustomer = SagaReturnType<typeof CustomerAPI.delete>;

function* setDrawerAddEditCustomerSaga({ payload }: Effect<{ open: boolean; id: number | null }>): SagaIterator {
  if (payload.id) {
    // re-fetch customer list
    yield put(fetchCustomerAction(payload.id));
  }
  yield put({
    type: ActionTypes.SET_DRAWER_ADD_EDIT_CUSTOMER,
    payload,
  });
}

function* fetchCustomerList({ payload }: Effect<TRequestMasterData>): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_CUSTOMER_LIST_LOADING });
  try {
    const response: APIResponseCustomerList = yield call(CustomerAPI.findAll, payload);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(fetchingCustomerListSuccess(data));
      scrollToTop();
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCHING_CUSTOMER_LIST_FAILURE });
  }
}

function* fetchCustomer({ payload }: Effect<{ id: number }>): SagaIterator {
  yield put(fetchingCustomerLoading());
  try {
    const response: APIResponseCustomer = yield call(CustomerAPI.find, payload);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(fetchingCustomerSuccess(data));
    }
  } catch (error) {
    yield put(fetchingCustomerFailure());
  }
}

function* createCustomer({ payload }: Effect<TCreateCustomer>): SagaIterator {
  yield put(createCustomerLoading());
  try {
    const response: APIResponseCreateCustomer = yield call(CustomerAPI.create, payload);
    if (httpResponseCreated(response.status)) {
      const { data } = response;
      yield put(createCustomerSuccess(data));

      // re-fetch customer list
      yield put(fetchListCustomerAction());

      // close drawer
      yield put(setDrawerAddEditCustomer(false, null));

      // fire swall.
      Swal.fire({
        icon: 'success',
        title: 'Okay...',
        text: 'Customer berhasil disimpan',
      });
    }
  } catch (error) {
    yield put(createCustomerFailure());
  }
}

function* updateCustomer({ payload }: Effect<{ id: number } & TCreateCustomer>): SagaIterator {
  yield put(updateCustomerLoading());
  try {
    const response: APIResponseUpdateCustomer = yield call(CustomerAPI.update, payload.id, payload.body);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(updateCustomerSuccess(data));

      // re-fetch customer list
      yield put(fetchListCustomerAction());

      // close drawer
      yield put(setDrawerAddEditCustomer(false, null));

      // fire swall.
      Swal.fire({
        icon: 'success',
        title: 'Okay...',
        text: 'Customer berhasil di perbaharui',
      });
    }
  } catch (error) {
    yield put(updateCustomerFailure());
  }
}

function* deleteCustomer({ payload }: Effect): SagaIterator {
  yield put(deleteCustomerLoading());
  const customerId = payload;
  try {
    const response: APIResponseDeleteCustomer = yield call(
      CustomerAPI.delete,
      customerId /* payload is a number (customer id) */,
    );
    if (httpResponseOK(response.status)) {
      yield put(deleteCustomerSuccess());

      // re-fetch customer list
      yield put(fetchListCustomerAction());

      // close dialog detail customer.
      yield put(setDialogDetaiLCustomer(false, null));

      // fire swall. I will replace with toast later.
      Swal.fire({
        icon: 'success',
        title: 'Okay!',
        text: 'Customer berhasil dihapus',
      });
    }
  } catch (error) {
    yield put(deleteCustomerFailure());
  }
}

export default function* customerSaga(): SagaIterator {
  yield takeEvery(ActionTypes.SET_DRAWER_ADD_EDIT_CUSTOMER_REQUESTED, setDrawerAddEditCustomerSaga);
  yield takeEvery(ActionTypes.FETCHING_CUSTOMER_LIST_REQUESTED, fetchCustomerList);
  yield takeLatest(ActionTypes.CREATE_CUSTOMER_REQUESTED, createCustomer);
  yield takeLatest(ActionTypes.UPDATE_CUSTOMER_REQUESTED, updateCustomer);
  yield takeEvery(ActionTypes.FETCHING_CUSTOMER_REQUESTED, fetchCustomer);
  yield takeLatest(ActionTypes.DELETE_CUSTOMER_REQUESTED, deleteCustomer);
}
