import type { Effect, SagaIterator, SimpleEffect } from '@redux-saga/types';
import { httpResponseCreated, httpResponseOK } from '@/utils/http';
import { SagaReturnType, call, put, takeEvery, takeLatest } from 'redux-saga/effects';

import {
  createCustomerFailure,
  createCustomerLoading,
  createCustomerSuccess,
  deleteCustomerFailure,
  deleteCustomerLoading,
  deleteCustomerSuccess,
  fetchingCustomerFailure,
  fetchingCustomerListSuccess,
  fetchingCustomerLoading,
  fetchingCustomerSuccess,
  updateCustomerFailure,
  updateCustomerLoading,
  updateCustomerSuccess,
} from './actions';
import ActionTypes from './enum';
import CustomerAPI from './service';
import { CustomerModel } from '@/interfaces/customer';

// Type definitions of return of result.
type APIResponseCustomerList = SagaReturnType<typeof CustomerAPI.findAll>;
type APIResponseCustomer = SagaReturnType<typeof CustomerAPI.find>;
type APIResponseCreateCustomer = SagaReturnType<typeof CustomerAPI.create>;
type APIResponseUpdateCustomer = SagaReturnType<typeof CustomerAPI.update>;
type APIResponseDeleteCustomer = SagaReturnType<typeof CustomerAPI.delete>;

// Types effect

// prettier-ignore
type FetchListCustomerEffect = SimpleEffect<typeof ActionTypes.FETCHING_CUSTOMER_LIST_REQUESTED, Record<string, string>>;
// prettier-ignore
type CreateCustomerEffect = SimpleEffect<typeof ActionTypes.CREATE_CUSTOMER_REQUESTED, CustomerModel>;
// prettier-ignore
type UpdateCustomerEffect = SimpleEffect<typeof ActionTypes.UPDATE_CUSTOMER_REQUESTED, { id: string; body: CustomerModel }>;
// prettier-ignore
type DeleteCustomerEffect = SimpleEffect<typeof ActionTypes.DELETE_CUSTOMER_REQUESTED, string>;

/** Fetch list customer */
function* fetchCustomerList({ payload }: FetchListCustomerEffect): SagaIterator {
  yield put({ type: ActionTypes.FETCHING_CUSTOMER_LIST_LOADING });
  try {
    const response: APIResponseCustomerList = yield call(CustomerAPI.findAll, payload);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(fetchingCustomerListSuccess(data));
    }
  } catch (error) {
    yield put({ type: ActionTypes.FETCHING_CUSTOMER_LIST_FAILURE });
  }
}

/** Create customer */
function* createCustomer({ payload }: CreateCustomerEffect) {
  yield put(createCustomerLoading());
  try {
    const response: APIResponseCreateCustomer = yield call(CustomerAPI.create, payload);
    if (httpResponseCreated(response.status)) {
      const { data } = response;
      yield put(createCustomerSuccess(data));
    }
  } catch (error) {
    yield put(createCustomerFailure());
  }
}

/** Update Customer by id */
function* updateCustomer({ payload }: UpdateCustomerEffect) {
  yield put(updateCustomerLoading());
  try {
    const response: APIResponseUpdateCustomer = yield call(CustomerAPI.update, payload.id, payload.body);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(updateCustomerSuccess(data));
    }
  } catch (error) {
    yield put(updateCustomerFailure());
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

/** Delete customer by id */
function* deleteCustomer({ payload }: DeleteCustomerEffect): SagaIterator {
  yield put(deleteCustomerLoading());
  const customerId = payload;
  try {
    const response: APIResponseDeleteCustomer = yield call(
      CustomerAPI.delete,
      customerId /* payload is a number (customer id) */,
    );
    if (httpResponseOK(response.status)) {
      yield put(deleteCustomerSuccess());
    }
  } catch (error) {
    yield put(deleteCustomerFailure());
  }
}

export default function* customerSaga(): SagaIterator {
  yield takeEvery(ActionTypes.FETCHING_CUSTOMER_LIST_REQUESTED, fetchCustomerList);
  yield takeLatest(ActionTypes.CREATE_CUSTOMER_REQUESTED, createCustomer);
  yield takeLatest(ActionTypes.UPDATE_CUSTOMER_REQUESTED, updateCustomer);
  yield takeLatest(ActionTypes.DELETE_CUSTOMER_REQUESTED, deleteCustomer);
  yield takeEvery(ActionTypes.FETCHING_CUSTOMER_REQUESTED, fetchCustomer);
}
