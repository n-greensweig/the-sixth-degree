import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchScript() {

}

function* scriptSaga() {
  yield takeLatest('FETCH_SCRIPT', fetchScript);
}

export default scriptSaga;