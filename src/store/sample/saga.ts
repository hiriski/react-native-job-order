import type { SagaIterator, SimpleEffect } from '@redux-saga/types';
import { SagaReturnType, call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodosFailure, fetchTodosLoading, fetchTodosSuccess } from './actions';
import * as Actions from './constants';
import TodoService from './service';
import { httpResponseOK } from '@/utils/http';

type APIResponseTodos = SagaReturnType<typeof TodoService.findAll>;

type PayloadFetchTodos = SimpleEffect<typeof Actions.FETCH_TODOS_REQUESTED, Record<string, string | number>>;

function* fetchTodos({ payload: params }: PayloadFetchTodos): SagaIterator {
  // console.log('payload fetchTodos', params);
  yield put(fetchTodosLoading());
  try {
    const response: APIResponseTodos = yield call(TodoService.findAll, params);
    if (httpResponseOK(response.status)) {
      const { data } = response;
      yield put(fetchTodosSuccess(data));
    }
  } catch (e) {
    yield put(fetchTodosFailure());
  }
}

export default function* sampleSaga(): SagaIterator {
  yield takeEvery(Actions.FETCH_TODOS_REQUESTED, fetchTodos);
}
