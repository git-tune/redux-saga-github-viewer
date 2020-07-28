import { all } from 'redux-saga/effects';
import userSaga from './user';
import issueSaga from './issue';

function* rootSaga() {
  yield all([userSaga(), issueSaga()]);
}

export default rootSaga;
