import Nav from '../Nav/Nav';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './GameCode.css';
function GameCode() {

    const dispatch = useDispatch();
    const gameCode = useSelector((store) => store.code);
    const gameReducer = useSelector((store) => store.gameReducer);
    console.log(gameCode.code);

    useEffect(() => {
        if (gameCode.code) { // Ensure gameCode.code is not undefined or null
            dispatch({ type: 'FETCH_GAME_SCRIPTS', payload: { code: gameCode.code } });
        }
    }, [dispatch, gameCode.code]); // Add dispatch to the dependency array


    return (
        <div className="gameCodeBody">
            <Nav />
            <h1 id="createGameH1">You Created A Game!</h1>

            <h1 id="chosenScriptH1">Chosen Scripts: </h1>
            <ul>
                {gameReducer.map(script => (
                    <li key={script.id} id="scriptLi">{script.first_actor} to {script.seventh_actor}</li>
                ))}
            </ul>

            <h1 id="chosenScriptH1">Send this Game Code To A Friend!</h1>
            <p id="gameCodeP">{gameCode.code}</p>
        </div>
    )
}

export default GameCode;