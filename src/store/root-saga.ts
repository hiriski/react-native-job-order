import { SagaIterator } from '@redux-saga/types';
import { spawn } from 'redux-saga/effects';

// Sagas
import sampleSaga from '@store/sample/saga';
import authSaga from '@store/auth/saga';
import userSaga from '@store/user/saga';
import customerSaga from '@store/customer/saga';
import joSaga from '@store/job-order/saga';

// Root sagas.
export default function* rootSaga(): SagaIterator {
  yield spawn(sampleSaga);
  yield spawn(authSaga);
  yield spawn(userSaga);
  yield spawn(customerSaga);
  yield spawn(joSaga);
}
