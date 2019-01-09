import { call, put, take } from 'redux-saga/effects';

import { fetchUsers, fetchResent } from './service';
import { actionTypes as at } from './constants';
import { fetchSuccess, fetchError, fetchResentSuccess, fetchResentError } from './actions';
import { User, Article } from './model';

export function* fetchUsersList(id: string) {
  try {
    const result: Array<User> = yield call(fetchUsers, id);

    yield put(fetchSuccess(result));
  } catch (err) {
    yield put(fetchError(err));
  }
}

export function* sampleWatcher() {
  while (true) {
    const { id } = yield take(at.USERS_SAMPLE_FETCH);

    yield call(fetchUsersList, id);
  }
}

export function* fetchRecentList(id: string) {
  try {
    const result: Array<Article> = yield call(fetchResent, id);

    yield put(fetchResentSuccess(result));
  } catch (err) {
    yield put(fetchResentError(err));
  }
}

export function* sampleRecentListWatcher() {
  while (true) {
    const { id } = yield take(at.RESENT_FETCH);

    yield call(fetchRecentList, id);
  }
}
