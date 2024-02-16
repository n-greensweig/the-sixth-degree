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

function* postScript(action) {
  try {
    yield axios.post('/api/script', action.payload);
    yield put({ type: 'SEND_SCRIPT' });
  } catch (error) {
    console.log('Script POST request failed', error);
  }
}

function* scriptSaga() {
  yield takeLatest('FETCH_SCRIPTS', getScripts);
  yield takeLatest('POST_SCRIPT', postScript);
}

export default scriptSaga;