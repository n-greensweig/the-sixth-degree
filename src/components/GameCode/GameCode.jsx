import Nav from '../Nav/Nav';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function GameCode() {
    const dispatch = useDispatch();
    const gameCode = useSelector((store) => store.code);
    useEffect(() => {
        dispatch({ type: 'FETCH_GAME' });
      }, []);
    return(
        <body>
            <Nav/>
<h1>You Created A Game!</h1>

<h2>Chosen Scripts: </h2>
<li>Ryan Reynolds to Tyler Perry</li>
<li>Hugh Jackman to Chris Rock</li>
<li>Halle Berry to Martha Stewart</li>

<h2>Send this Game Code To A Friend!</h2>
{gameCode}
{/* <li id="gameLink">{generateGameLink()}</li> */}
        </body>
    )
}

export default GameCode;