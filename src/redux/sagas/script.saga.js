import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchScript() {

}

function* scriptSaga() {
  yield takeLatest('FETCH_SCRIPT', fetchScript);
}

export default scriptSaga;