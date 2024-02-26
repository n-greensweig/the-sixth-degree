import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NewScript from '../NewScript3/NewScript3';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from '../Nav/Nav';
import './NewGame.css'
function NewGame() {
    const dispatch = useDispatch();
    const history = useHistory();

    // GET request to display user's scripts on the DOM
    const scripts = useSelector((store) => store.scriptReducer);

    const selectedScripts = [];

    const handleScriptSelection = (id) => {
        if (!selectedScripts.includes(id)) {
            selectedScripts.push(id);
        } else {
            selectedScripts.splice(selectedScripts.indexOf(id), 1);
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (selectedScripts.length < '3'){
            alert('select 3 scripts')
        } else{
            dispatch({ type: 'CREATE_GAME', payload: selectedScripts });
        history.push('/game-code');
        }

        // dispatch({ type: 'CREATE_GAME', payload: selectedScripts });
        // history.push('/game-code');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_SCRIPTS' });
    }, []);

    return (
        <div>
            <Nav />
            <h1 id="pick-scripts-line">Pick 3 Scripts!</h1>
            <div className="container">
            </div>

            <Button variant="contained" id="createGameBtn" onClick={e => handleClick(e)}> Create Game </Button>
            <Paper id="scriptGame-list" elevation={24}>
                <ul>
                    {scripts?.map(script => (
                        <li key={script.id} className="container">
                            <input id="checkboxes" onChange={() => handleScriptSelection(script.id)} value={script.id} type="checkbox" />
                            <p id="theScripts">{script.first_actor} to {script.seventh_actor}</p>
                        </li>
                    ))}
                </ul>
            </Paper>
            {<NewScript />}
        </div>
    )
}

export default NewGame;



