import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getScripts() {
  try {
    const response = yield axios.get('/api/script');
    yield put({ type: 'GET_SCRIPTS', payload: response.data });
  } catch (error) {
    console.log('Script GET request failed', error);
  }
}

function* scriptSaga() {
  yield takeLatest('FETCH_SCRIPTS', getScripts);
}

export default scriptSaga;