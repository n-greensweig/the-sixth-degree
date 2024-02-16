import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGame() {
    try {
        const response = yield axios.get('/api/game');
        yield put({ type: 'SET_GAME', payload: response.data });
    } catch (error) {
        console.log('Game GET request failed', error);
    }
}

function* createGame() {
    try {
        yield axios.post('/api/game');
    } catch (error) {
        console.log('Game POST request failed', error);
    }
}

function* gameSaga() {
    yield takeLatest('FETCH_GAME', fetchGame);
    yield takeLatest('CREATE_GAME', createGame);
}

export default gameSaga;