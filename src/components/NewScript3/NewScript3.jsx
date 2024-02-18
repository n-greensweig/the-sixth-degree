import { useDispatch } from "react-redux";
import UniversalButton from "../UniversalButton/UniversalButton";
import { useState } from "react";
import { Card, Button, CardContent, Grid, Paper } from '@mui/material';

import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';

function NewScript() {
  
    const dispatch = useDispatch();
    const [script, setScript] = useState({});

    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: script }); // POST script to the DB
    };

    // return (
    //     <div>
    //         <h1>New Script</h1>

    //         {/* Input fields go here */}
    //         <form onSubmit={handleSubmit}>
    //             <input type="text" placeholder="First Actor" onChange={e => setScript({ ...script, first_actor: e.target.value })} />
    //             <input type="text" placeholder="First Appearance" onChange={e => setScript({ ...script, first_appearance: e.target.value })} />
    //             <input type="text" placeholder="Second Actor" onChange={e => setScript({ ...script, second_actor: e.target.value })} />
    //             <input type="text" placeholder="Second Appearance" onChange={e => setScript({ ...script, second_appearance: e.target.value })} />
    //             <input type="text" placeholder="Third Actor" onChange={e => setScript({ ...script, third_actor: e.target.value })} />
    //             <input type="text" placeholder="Third Appearance" onChange={e => setScript({ ...script, third_appearance: e.target.value })} />
    //             <input type="text" placeholder="Fourth Actor" onChange={e => setScript({ ...script, fourth_actor: e.target.value })} />
    //             <input type="text" placeholder="Fourth Appearance" onChange={e => setScript({ ...script, fourth_appearance: e.target.value })} />
    //             <input type="text" placeholder="Fifth Actor" onChange={e => setScript({ ...script, fifth_actor: e.target.value })} />
    //             <input type="text" placeholder="Fifth Appearance" onChange={e => setScript({ ...script, fifth_appearance: e.target.value })} />
    //             <input type="text" placeholder="Sixth Actor" onChange={e => setScript({ ...script, sixth_actor: e.target.value })} />
    //             <input type="text" placeholder="Sixth Appearance" onChange={e => setScript({ ...script, sixth_appearance: e.target.value })} />
    //             <input type="text" placeholder="Seventh Actor" onChange={e => setScript({ ...script, seventh_actor: e.target.value })} />
    //             <UniversalButton text="Save Script" onClick={handleSubmit} />
    //         </form>


    //     </div>
    // );

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



