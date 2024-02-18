import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import UniversalButton from '../UniversalButton/UniversalButton';
import Button from '@mui/material/Button';




function NewScript() {


    const dispatch = useDispatch();
    const [script, setScript] = useState({});

    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: script }); // POST script to the Database.
    };


    const [formData, setFormData] = useState({
        firstActor: '',
        firstAppearance: '',
        // Will add the other input fields later
    });






    //holds actor suggestions
    const [actorSuggestions, setActorSuggestions] = useState([]);
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    //holds selected actor
    const [selectedActor, setSelectedActor] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);



    // Jama's API Key
    const apiKey = '30c198675e2638514ba7c9dc7212193c';



    //// For input field changes
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });



        // Uses API to fetch actor suggestions as I type
        if (name === 'firstActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Uses API to fetch movie suggestions as I type
        if (name === 'firstAppearance') {
            try {
                // Only suggests movies the selected actor was in.
                const actorId = selectedActor ? selectedActor.id : null;
                if (actorId) {
                    const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`);
                    const moviesForActor = response.data.cast.map(movie => ({
                        id: movie.id,
                        title: movie.title
                    }));
                    setMovieSuggestions(moviesForActor);
                }
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }
    };



    // This handler is for selecting an actor from the suggestions
    const handleActorSelect = (actor) => {
        setSelectedActor(actor);
        setFormData({
            ...formData,
            firstActor: actor.name
        });
        setActorSuggestions([]); // Clears input field after actor is selected.
    };



    // This handler is for selecting a movie from the suggestions.
    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
        setFormData({
            ...formData,
            firstAppearance: movie.title
        });
        setMovieSuggestions([]); // Clears input field after movie is selected.
    };



    return (
        <>
            <form>
                <label>
                    Who:
                    <input
                        type="text"
                        name="firstActor"
                        value={formData.firstActor}
                        onChange={handleChange}
                    />
                    {/* Uses API to display actor suggestions */}
                    <ul>
                        {actorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor)}>{actor.name}</li>
                        ))}
                    </ul>
                </label>
                <br />
                <label>
                    Is In:
                    <input
                        type="text"
                        name="firstAppearance"
                        value={formData.firstAppearance}
                        onChange={handleChange}
                    />
                    {/* Uses API to display movie suggestions */}
                    <ul>
                        {movieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie)}>{movie.title}</li>
                        ))}
                    </ul>
                </label>
                <br />
            </form>

            {/* Will Submit Completed Form to Database */}
            <Button variant='contained'>Submit</Button>

        </>
    );
}



export default NewScript;



