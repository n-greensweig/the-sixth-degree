import React, { useState } from 'react';
import axios from 'axios';

function NewScript() {
    const [formData, setFormData] = useState({
        firstActor: '',
        firstAppearance: '',
        // Other form data...
    });
    const [actorSuggestions, setActorSuggestions] = useState([]);
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    const apiKey = '30c198675e2638514ba7c9dc7212193c'; //My API Key

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Fetching actor suggestions
        if (name === 'firstActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }

        // Fetching movie suggestions
        if (name === 'firstAppearance') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${apiKey}`);
                setMovieSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }
    };

    return (
        <>
            <form>

                
            </form>
        </>
    );
}

export default NewScript;

