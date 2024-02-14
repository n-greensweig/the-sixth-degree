import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGame() {

}

function* gameSaga() {
  yield takeLatest('FETCH_GAME', fetchGame);
}

export default gameSaga;