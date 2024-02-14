import React from 'react';
import Button from '@mui/material/Button';

// Reusable Button Component.

function UniversalButton ({text, onClick}) {

    return(
        <Button variant="contained"  onClick={onClick}>
            {/* Example use --> text = "Hello" */}
            {text}
        </Button>
    )
};

export default UniversalButton;