import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGuess() {

}

function* guessSaga() {
  yield takeLatest('FETCH_Guess', fetchGuess);
}

export default guessSaga;