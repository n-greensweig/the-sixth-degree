import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchGame() {
    try {
        const response = yield axios.get('/api/game');
        console.log('Game GET request', response.data);
        yield put({ type: 'SET_GAME', payload: response.data });
    } catch (error) {
        console.log('Game GET request failed', error);
    }
}

function* joinGame(action) {
    try {
        yield axios.put('/api/game/join', action.payload);
    } catch (error) {
        console.log('Game PUT request failed', error);
    }
}

function* updateGuesser(action) {
    try {
        yield axios.put('/api/game/guesser-update', action.payload);
    } catch (error) {
        console.log('Game PUT request failed', error);
    }
}

function* createGame(action) {
    try {
        let result = yield axios.post('/api/game', action.payload);
        console.log(result.data.code);
        yield put({
            type: 'SET_GAME_CODE',
            payload: { code: result.data.code, }
        });
    } catch (error) {
        console.log('Game POST request failed', error);
    }
}

function* fetchGameScripts(action) {
    try {
        console.log(action.payload);
        const response = yield axios.get('/api/game/active-scripts', { params: { code: action.payload.code } });
        yield put({ type: 'SET_GAME_SCRIPTS', payload: response.data });
    } catch (error) {
        console.log('Game GET request failed', error);
    }
}

function* gameSaga() {
    yield takeLatest('FETCH_GAME', fetchGame);
    yield takeLatest('JOIN_GAME', joinGame);
    yield takeLatest('CREATE_GAME', createGame);
    yield takeLatest('UPDATE_GUESSER', updateGuesser);
    yield takeLatest('FETCH_GAME_SCRIPTS', fetchGameScripts);
}

export default gameSaga;