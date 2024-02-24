import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* submitGuess(action) {
  const gameId = action.payload.id;
  const guess = action.payload.guess;
  try {
    yield axios.put(`/api/guess/${guess.id}`, guess);
    yield put({ type: "FETCH_ACTIVE_SCRIPT", payload: gameId });
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


function* guessSaga() {
  yield takeLatest('SUBMIT_GUESS', submitGuess);
  yield takeLatest('SAVE_GUESS', saveGuess);
}

export default guessSaga;