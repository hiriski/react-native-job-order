import { SagaIterator } from '@redux-saga/types';
import { spawn } from 'redux-saga/effects';

// Sagas
import sampleSaga from './sample/saga';

// Root sagas.
export default function* rootSaga(): SagaIterator {
  yield spawn(sampleSaga);
}
