import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NewScript from '../NewScript3/NewScript3';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from '../Nav/Nav';
import './SendScriptsBack.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Swal from 'sweetalert2';
function SendScriptsBack() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    const { code } = useParams();
    const { guesser } = useParams();

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
    // Add verification that 3 scripts are selected
    const handleClick = (e) => {
        e.preventDefault();
        console.log(id);
        if (selectedScripts.length < '3'){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Select 3 Scripts!",
            });
        } else{
            dispatch({ type: 'SEND_SCRIPTS_TO_GUESS', payload: { selectedScripts, id, code, guesser } });
        history.push('/user');
        }
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_SCRIPTS' });
    }, []);

    return (
        <div>
            <Nav />

            <div className="container"> 
                <h1 id="pick-three-scripts-line">Pick 3 Scripts to send back!</h1>
                
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

                <Button 
                    id="send-scripts-button2" 
                    variant="contained" 
                    onClick={e => handleClick(e)}> Send Scripts </Button>

                {<NewScript />}
            </div>
        </div>
    )
}
export default SendScriptsBack;



