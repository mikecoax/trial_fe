import { all, put, takeLatest } from "redux-saga/effects";

import * as types from "./eventActionsTypes";


function *newEvent ({ payload }) {
  yield put({ type: types.TOGGLE_PROCESSING, payload: true });

  try {
    yield put({ type: types.NEW_EVENT_SUCCESS, payload: payload });
  } catch (error) {
    yield put({ type: types.EVENT_REQUEST_ERROR, error });
  } finally {
    yield put({ type: types.TOGGLE_PROCESSING, payload: false });
  }
}

export default function *() {
  yield all([
    yield takeLatest(types.NEW_EVENT, newEvent)
  ])
}
