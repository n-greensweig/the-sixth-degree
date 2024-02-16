import React, { useEffect, useState } from 'react';
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';
import UniversalButton from '../UniversalButton/UniversalButton';


// This module is responsible for the input feilds that allows the player to create a new script.
// New scripts will be visible in saved scripts page.
function NewScript() {

    const [formData, setFormData] = useState({
        // Clears form on submission
        firstActor: '',
        firstAppearance: '',
        secondActor: '',
        secondAppearance: '',
        thirdActor: '',
        thirdAppearance: '',
        fourthActor: '',
        fourthAppearance: '',
        fifthActor: '',
        fifthAppearance: '',
        sixthActor: '',
        sixthAppearance: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    // Returns the 6 input fields for the actor & movie appearance.
    return (
        <>
        <form>
            <label >
                Who:
                <input type="text" name="FirstActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label >
                Is In:
                <input type="text" name="FirstAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Second Input Field */}
            <label>
            Who:
                <input type="text" name="SecondActor" value={formData.secondActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="SecondAppearance" value={formData.secondAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Third Input Field */}
            <label>
            Who:
                <input type="text" name="ThirdActor" value={formData.thirdActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="ThirdAppearance" value={formData.thirdAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Fourth Input Field */}
            <label>
            Who:
                <input type="text" name="FourthActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="FourthAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Fifth Input Field */}
            <label>
            Who:
                <input type="text" name="FifthActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="FifthAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />



            {/* Sixth Input Field */}
            <label>
            Who:
                <input type="text" name="SixthActor" value={formData.firstActor} onChange={handleChange} />
            </label>
            <br />
            <label>
            Is In:
                <input type="text" name="SixthAppearance" value={formData.firstAppearance} onChange={handleChange} />
            </label>
            <br />
        </form>

        <div>
            <br></br>
            {/* Imported the Reusable Button to use for submission */}
        <UniversalButton  text="Submit" color="primary"></UniversalButton>
        </div>
        </>
    );



};


export default NewScript;

