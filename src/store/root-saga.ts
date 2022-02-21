import { SagaIterator } from '@redux-saga/types';
import { spawn } from 'redux-saga/effects';

// Sagas
import sampleSaga from '@store/sample/saga';
import authSaga from '@store/auth/saga';

// Root sagas.
export default function* rootSaga(): SagaIterator {
  yield spawn(sampleSaga);
  yield spawn(authSaga);
}
