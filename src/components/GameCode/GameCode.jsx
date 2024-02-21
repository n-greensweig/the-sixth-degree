import Nav from '../Nav/Nav';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './GameCode.css';
function GameCode() {
    const dispatch = useDispatch();
    const gameCode = useSelector((store) => store.code);
    useEffect(() => {
        dispatch({ type: 'FETCH_GAME' });
    }, []);
    return (
        <body className="gameCodeBody">
            <Nav />
            <h1 id="createGameH1">You Created A Game!</h1>

            <h1 id="chosenScriptH1">Chosen Scripts: </h1>
            <li id="scriptLi">Ryan Reynolds to Tyler Perry</li>
            <li id="scriptLi">Hugh Jackman to Chris Rock</li>
            <li id="scriptLi">Halle Berry to Martha Stewart</li>

            <h1 id="chosenScriptH1">Send this Game Code To A Friend!</h1>
            <p id="gameCodeP">{gameCode.code}</p>
        </body>
    )
}

export default GameCode;