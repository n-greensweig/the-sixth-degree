import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import UniversalButton from '../UniversalButton/UniversalButton';
import Button from '@mui/material/Button';
import Modal from 'react-modal';



function NewScript() {
    const dispatch = useDispatch();
    const [script, setScript] = useState({});



    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: script }); // POST script to the Database.
        closeModal(); // Close the modal after submitting
    };



    const [formData, setFormData] = useState({
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
        sixthAppearance: '',
        seventhActor: '',
    });



    // Holds actor suggestions
    const [actorSuggestions, setActorSuggestions] = useState([]);
    const [movieSuggestions, setMovieSuggestions] = useState([]);
    // Holds selected actor
    const [selectedActor, setSelectedActor] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);



    // Modal state
    const [modalIsOpen, setModalIsOpen] = useState(false);



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
        if (name === 'firstActor' || 'secondActor' || 'thirdActor' || 'fourthActor' || 'fifthActor' || 'sixthActor' || 'seventhActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Uses API to fetch movie suggestions as I type
        if (name === 'firstAppearance' || 'secondAppearance' || 'thirdAppearance' || 'fourthAppearance' || 'fifthAppearance' || 'sixthAppearance') {
            try {
                // Only suggests movies the selected actor was in.
                const actorId = selectedActor ? selectedActor.id : null;
                if (actorId) {
                    const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`);
                    const moviesForActor = response.data.cast.map(movie => ({
                        id: movie.id,
                        title: movie.title,
                        posterPath: movie.poster_path // Added poster path for each movie
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
            firstActor: actor.name,
            secondActor: actor.name,
            thirdActor: actor.name,
            fourthActor: actor.name,
            fifthActor: actor.name,
            sixthActor: actor.name,
            seventhActor: actor.name,

        });
        setActorSuggestions([]); // Clears input field after actor is selected.
    };



    // This handler is for selecting a movie from the suggestions.
    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
        setFormData({
            ...formData,
            firstAppearance: movie.title,
            secondAppearance: movie.title,
            thirdAppearance: movie.title,
            fourthAppearance: movie.title,
            fifthAppearance: movie.title,
            sixthAppearance: movie.title,
        });
        setMovieSuggestions([]); // Clears input field after movie is selected.
    };



    // Modal open/close functions
    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };



    return (
        <>
            <Button variant='contained' onClick={openModal}>Create New Script</Button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="New Script Modal"
            >



                <form onSubmit={handleSubmit}>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="firstActor"
                            placeholder="First Actor"
                            value={formData.firstActor}
                            onChange={handleChange}
                            // onChange={e => setScript({ ...script, first_actor: e.target.value })}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <label>
                        Is In:
                        <input
                            type="text"
                            name="firstAppearance"
                            placeholder="First Appearance"
                            value={formData.firstAppearance}
                            onChange={handleChange}
                            // onChange={e => setScript({ ...script, first_appearance: e.target.value })}
                        />
                        {/* Uses API to display movie suggestions */}
                        <ul>
                            {movieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />

                </form>



                <form>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="secondActor"
                            placeholder="Second Actor"
                            value={formData.secondActor}
                            onChange={handleChange}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <label>
                        Is In:
                        <input
                            type="text"
                            name="secondAppearance"
                            placeholder="Second Appearance"
                            value={formData.secondAppearance}
                            onChange={handleChange}
                        />
                        {/* Uses API to display movie suggestions */}
                        <ul>
                            {movieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                </form>



                <form>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="thirdActor"
                            placeholder="Third Actor"
                            value={formData.thirdActor}
                            onChange={handleChange}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <label>
                        Is In:
                        <input
                            type="text"
                            name="thirdAppearance"
                            placeholder="Third Appearance"
                            value={formData.thirdAppearance}
                            onChange={handleChange}
                        />
                        {/* Uses API to display movie suggestions */}
                        <ul>
                            {movieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                </form>



                <form>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="fourthActor"
                            placeholder="Fourth Actor"
                            value={formData.fourthActor}
                            onChange={handleChange}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <label>
                        Is In:
                        <input
                            type="text"
                            name="fourthAppearance"
                            placeholder="Fourth Appearance"
                            value={formData.fourthAppearance}
                            onChange={handleChange}
                        />
                        {/* Uses API to display movie suggestions */}
                        <ul>
                            {movieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                </form>



                <form>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="fifthActor"
                            placeholder="Fifth Actor"
                            value={formData.fifthActor}
                            onChange={handleChange}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <label>
                        Is In:
                        <input
                            type="text"
                            name="fifthAppearance"
                            placeholder="Fifth Appearance"
                            value={formData.fifthAppearance}
                            onChange={handleChange}
                        />
                        {/* Uses API to display movie suggestions */}
                        <ul>
                            {movieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                </form>



                <form>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="sixthActor"
                            placeholder="Sixth Actor"
                            value={formData.sixthActor}
                            onChange={handleChange}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                    <label>
                        Is In:
                        <input
                            type="text"
                            name="sixthAppearance"
                            placeholder="Sixth Appearance"
                            value={formData.sixthAppearance}
                            onChange={handleChange}
                        />
                        {/* Uses API to display movie suggestions */}
                        <ul>
                            {movieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />
                </form>



            <form>
                    <label>
                        Who:
                        <input
                            type="text"
                            name="seventhActor"
                            placeholder="Seventh Actor"
                            value={formData.seventhActor}
                            onChange={handleChange}
                        />
                        {/* Uses API to display actor suggestions */}
                        <ul>
                            {actorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor)}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>
                    </label>
                    <br />

                {/* Will Submit Completed Form to Database */}
                <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                     </form>
                     </Modal>
        </>
    );
}



export default NewScript;















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