import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TextField, Button, Grid, Container, Card, CardContent, Paper, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import NewScript from '../NewScript3/NewScript3';
import Nav from "../Nav/Nav";
import './SavedScript6.css'
import swal from 'sweetalert';


function savedScripts() {

    const scripts = useSelector((store) => store.scriptReducer);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);



    // Open and close dialog based on isEditing status
    const toggleEditing = e => isEditing ? setIsEditing(false) : setIsEditing(true);

    const deleteScript = (scriptId) => {
        swal({
            title: 'Are you sure?',
            text: 'Do you want to delete this script?',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then(willDelete => {
            console.log(willDelete);
            if (willDelete) {
                console.log(willDelete);
                dispatch({ type: 'DELETE_SCRIPT', payload: scriptId });
                swal({
                    title: 'Deleted!',
                    text: 'Your script has been deleted',
                    icon: 'success',
                    buttons: false,
                    timer: 1000,
                });
            } else {
                swal('Cancelled', 'Your script was not deleted', 'error');
            }
        });    
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_SCRIPTS' });
    }, []);

    return (
        <div>
            <Nav />

            <Grid container justifyContent="center">
                <h2 id="my-scripts-line">My Scripts</h2>
                <NewScript id="create-new-script-button"/>

                <ul>
                    {scripts?.map(script => {
                        return (
                            <li key={script.id}>
                                <p id="script-actor-names">{script.first_actor} - {script.seventh_actor}</p>
                                {/* <Button variant="contained" onClick={e => toggleEditing(e)} startIcon={isEditing ? null : <EditIcon />}
                                    style={{
                                        borderColor: 'white', color: "gray",
                                    }}>{isEditing ? null : 'Edit script'}</Button> */}
                                {/* ^^^might move this to a stretch goal??? */}
                                <Button id="delete-script-button" variant="contained" onClick={id => deleteScript(script.id)}>Delete script</Button>
                            </li>
                        );
                    })}
                </ul>
            </Grid>
        </div>
    );

}

export default savedScripts;