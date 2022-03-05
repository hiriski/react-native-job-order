import ActionTypes from './enum';
import { SagaIterator, SimpleEffect } from '@redux-saga/types';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import JoService from '@store/job-order/service';
import { fetchListJoFailure, fetchListJoLoading, fetchListJoSuccess } from '@store/job-order/actions';
import { httpResponseOK } from '@utils/http';

// Type definitions of return of result.
type APIResponseListJo = SagaReturnType<typeof JoService.findAll>;

// Type effect
// prettier-ignore
type FetchListJoEffect = SimpleEffect<typeof ActionTypes.FETCH_LIST_JO_REQUESTED, Record<string, string | number>>

function* fetchListJo({ payload }: FetchListJoEffect) {
  yield put(fetchListJoLoading());
  try {
    const response: APIResponseListJo = yield call(JoService.findAll, payload);
    if (httpResponseOK(response.status)) {
      yield put(fetchListJoSuccess(response.data));
    }
  } catch (e) {
    yield put(fetchListJoFailure());
  }
}

export default function* joSaga(): SagaIterator {
  yield takeEvery(ActionTypes.FETCH_LIST_JO_REQUESTED, fetchListJo);
}
