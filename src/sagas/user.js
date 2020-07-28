import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../apis';
import * as ActionType from '../actions';

function* fetchUser() {
  try {
    const data = yield call(api.fetchUser);
    const user = data;
    yield put({
      type: ActionType.USER_FETCH_SUCCEEDED,
      payload: { user },
    });
  } catch (e) {
    yield put({
      type: ActionType.USER_FETCH_FAILED,
      payload: { message: 'ユーザの取得に失敗しました' },
    });
  }
}

function* userSaga() {
  yield takeLatest(ActionType.USER_FETCH_REQUESTED, fetchUser);
}

export default userSaga;
