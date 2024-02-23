import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import NewScript from '../NewScript3/NewScript3';
import Nav from "../Nav/Nav";


function savedScripts() {

    const scripts = useSelector((store) => store.scriptReducer);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);

    // Open and close dialog based on isEditing status
    const toggleEditing = e => isEditing ? setIsEditing(false) : setIsEditing(true);

    const deleteScript = (scriptId) => {
        dispatch({ type: 'DELETE_SCRIPT', payload: scriptId });
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_SCRIPTS' });
    }, []);

    return (
        <div>
            <Nav />

            <h2>My Scripts</h2>
            <NewScript />

            <ul>
                {scripts?.map(script => {
                    return (
                        <li key={script.id}>
                            <p>{script.first_actor} - {script.seventh_actor}</p>
                            <Button variant="contained" onClick={e => toggleEditing(e)} startIcon={isEditing ? null : <EditIcon />}
                                style={{
                                    borderColor: 'white', color: "gray",
                                }}>{isEditing ? null : 'Edit script'}</Button>
                            <Button variant="contained" onClick={id => deleteScript(script.id)}
                                style={{
                                    borderColor: 'white', color: "white", fill: "red"
                                }}>Delete script</Button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );


}

export default savedScripts;