import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGuess() {

}

function* submitGuess(action) {
  const id = action.payload.id;
  try {
    yield axios.post(`/api/guess/${id}`, action.payload);
    yield put({ type: 'SEND_GUESS' });
  } catch (error) {
    console.log('Submit POST request failed', error);
  }
}

function* saveGuess(action) {
  const id = action.payload.id;
  console.log(action.payload);
  try {
    yield axios.post(`/api/guess/save/${id}`, action.payload);
    yield put({ type: 'STORE_GUESS' });
  } catch (error) {
    console.log('Save guess POST request failed', error);
  }
}

function* addEmptyGuess(action) {
  console.log('In addEmptyGuess', action.payload);
  try {
    yield axios.post('/api/guess/add', action.payload);
    yield put({ type: 'SET_GUESS' });
  } catch (error) {
    console.log('Add empty guess POST request failed', error);
  }
}

function* guessSaga() {
  yield takeLatest('FETCH_GUESS', fetchGuess);
  yield takeLatest('SUBMIT_GUESS', submitGuess);
  yield takeLatest('SAVE_GUESS', saveGuess);
  yield takeLatest('ADD_EMPTY_GUESS', addEmptyGuess);
}

export default guessSaga;