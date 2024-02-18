import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

function savedScripts() {

    const scripts = useSelector((store) => store.scriptReducer);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);

    // Open and close dialog based on isEditing status
    const toggleEditing = e => isEditing ? setIsEditing(false) : setIsEditing(true);

    useEffect(() => {
        dispatch({ type: 'FETCH_SCRIPTS' });
    }, []);

    return (
        <div>
            <h2>My Scripts</h2>
            <ul>
                {scripts?.map(script => {
                    return (
                        <li key={script.id}>
                            <p>{script.first_actor} - {script.seventh_actor}</p>
                            <Button variant="text" onClick={e => toggleEditing(e)} startIcon={isEditing ? null : <EditIcon />}
                                style={{
                                    borderColor: 'white', color: "gray",
                                }}>{isEditing ? null : 'Edit script'}</Button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );


}

export default savedScripts;