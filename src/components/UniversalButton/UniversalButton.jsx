import React from 'react';
import Button from '@mui/material/Button';

// Reusable Button Component.

function UniversalButton (props) {

    return(
        <Button variant="contained"  onClick={props.onClick}>
            {/* Example use --> text = "Hello" */}
            {props.text}
        </Button>
    )
};

export default UniversalButton;