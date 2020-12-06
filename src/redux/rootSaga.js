/* istanbul ignore file */

import { all } from "redux-saga/effects";

import authSagas from "./auth/authSagas";
import eventSagas from "./event/eventSagas";


export default function *rootSaga() {
  yield all([
    authSagas(),
    eventSagas(),
  ]);
}
