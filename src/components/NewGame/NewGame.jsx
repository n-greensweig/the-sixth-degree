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

const handleClick = (e) => {
    e.preventDefault()
    dispatch({ type: 'CREATE_GAME' });
    history.push('/user')
}
useEffect(() => {
    dispatch({ type: 'FETCH_SCRIPTS' });
  }, []);
    return (
        <body>
             {/* {JSON.stringify(scripts)} */}
            <Nav/>
            <h1>Pick 3 Scripts!</h1>
                <Button variant="contained" id="createGameBtn" onClick={e => handleClick(e)}> Create Game </Button>
               
            <ul>
                {scripts?.map(script => (
                 <li class="container">{script.first_actor} to {script.seventh_actor}
                    <input type="checkbox"></input>
                    <span class="checkmark"></span>
                </li>
                
                ))}
                
            </ul>
            <h2 id="gameLinkHeader">Game Link:</h2>
        <li id="gameLink">url@url.com</li>
            
            {/* Modal for creating new script, appears as button */}
            {<NewScript />}
            
        </body>
    )
}

export default NewGame;



