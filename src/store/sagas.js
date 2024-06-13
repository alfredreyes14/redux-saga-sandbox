import { put, takeLatest } from "redux-saga/effects";
import { getUserErrorAction, getUserSuccessAction } from "./slice";
import axios from "axios";

// Generator

function* getUserSaga({ payload: id }) {
  try {
    console.log({ id })
    // You can also export the axios call as a function.
    const response = yield axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    yield put(getUserSuccessAction(response.data));
  } catch (error) {
    yield put(getUserErrorAction(error));
  }
}

export function* watchGetUser() {
  yield takeLatest('users/getUserAction', getUserSaga);
}
