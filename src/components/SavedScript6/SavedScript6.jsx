import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { TextField, Button, Grid, Container, Card, CardContent, Paper, Box } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import NewScript from '../NewScript3/NewScript3';
import Nav from "../Nav/Nav";
import './SavedScript6.css'
import swal from 'sweetalert';
import Modal from '@mui/material/Modal';

function savedScripts() {


    const scripts = useSelector((store) => store.scriptReducer);
    const dispatch = useDispatch();

    const [showModal, setShowModal] = useState(false); // New state for modal visibility

    const handleShowModal = () => {
        setShowModal(true);
      };
    
      const handleCloseModal = () => {
        setShowModal(false);
      };





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
                <br></br>
                <Button id="create-new-script-button" variant="contained" color="primary" onClick={handleShowModal}>Post a New Script</Button>
                {/* New Script Modal Below */}
                <NewScript showModal={showModal} handleClose={handleCloseModal}/>
            </Grid>
            
            <Box>
                
                <ul>
                    {scripts?.map(script => {
                        return (
                            <Card className="card">
                            <CardContent>
                            <li key={script.id}>
                                <p id="script-actor-names">{script.first_actor} - {script.seventh_actor}</p>

                                <Button 
                                id="delete-script-button" 
                                variant="outlined"
                                size="small" 
                                sx = {{float: 'right', marginRight: '20px'}}
                                onClick={id => deleteScript(script.id)}>Delete</Button>

                            </li>
                            </CardContent>
                </Card>
                        );
                    })}
                </ul>
                
            </Box>
        </div>
    );

}

export default savedScripts;