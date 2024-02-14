import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGuess() {

}

function* guessSaga() {
  yield takeLatest('FETCH_Guess', fetchGuess);
}

export default guessSaga;