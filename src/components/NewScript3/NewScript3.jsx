import React, { useEffect, useState } from 'react';
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';
import UniversalButton from '../UniversalButton/UniversalButton';
import axios from 'axios';

// This module is responsible for the input fields that allows the player to create a new script.
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

    useEffect(() => {
        // Function to fetch data from TMDB API based on search query
        const fetchData = async (query) => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=30c198675e2638514ba7c9dc7212193c&query=${query}`);
                console.log(response.data.results); // Handle response data as per requirement
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        // Fetch data whenever input values change
        for (const key in formData) {
            if (formData[key]) {
                fetchData(formData[key]);
            }
        }
    }, [formData]);

    // Returns the 6 input fields for the actor & movie appearance.
    return (
        <>
            <form>
                {/* Input fields for actor and movie appearance */}
                {[...Array(6)].map((_, index) => (
                    <React.Fragment key={index}>
                        <label>
                            Who:
                            <input type="text" name={`actor${index}`} value={formData[`actor${index}`]} onChange={handleChange} />
                        </label>
                        <br />
                        <label>
                            Is In:
                            <input type="text" name={`appearance${index}`} value={formData[`appearance${index}`]} onChange={handleChange} />
                        </label>
                        <br />
                    </React.Fragment>
                ))}
            </form>

            {/* Imported the Reusable Button to use for submission */}
            <div>
                <br></br>
                <UniversalButton text="Submit" color="primary"></UniversalButton>
            </div>
        </>
    );
};

export default NewScript;




