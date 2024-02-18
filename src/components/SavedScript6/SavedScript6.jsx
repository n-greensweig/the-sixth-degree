import React, { useState } from 'react';
import Button from '@mui/material/Button';
import NewScript from '../NewScript3/NewScript3';



function SavedScript() {



    return (
        <div>
            <h1>Saved Scripts</h1>
            {/* Saved scripts content here */}
            

            {/* Modal for posting new script */}
            {<NewScript />}
        </div>
    );
}



export default SavedScript;
