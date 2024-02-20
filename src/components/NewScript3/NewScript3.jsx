




import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import Button from '@mui/material/Button';
import Modal from 'react-modal';

function NewScript() {
    const dispatch = useDispatch();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstActor: '',
        firstAppearance: '',
        secondActor: '',
        secondAppearance: '',
    });

    // Separate suggestions and selections for each actor and appearance
    const [firstActorSuggestions, setFirstActorSuggestions] = useState([]);
    const [secondActorSuggestions, setSecondActorSuggestions] = useState([]);
    const [firstMovieSuggestions, setFirstMovieSuggestions] = useState([]);
    const [secondMovieSuggestions, setSecondMovieSuggestions] = useState([]);

    const apiKey = '30c198675e2638514ba7c9dc7212193c';

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));

        // Fetch actor suggestions for the first actor input
        if (name === 'firstActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setFirstActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }

        // Fetch actor suggestions for the second actor input
        if (name === 'secondActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setSecondActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }

        // Fetch movie suggestions for the first appearance input
        if (name === 'firstAppearance' && formData.firstActor) {
            try {
                const actor = firstActorSuggestions.find(actor => actor.name === formData.firstActor);
                if (actor) {
                    const response = await axios.get(`https://api.themoviedb.org/3/person/${actor.id}/movie_credits?api_key=${apiKey}`);
                    setFirstMovieSuggestions(response.data.cast.map(movie => ({
                        id: movie.id,
                        title: movie.title,
                        posterPath: movie.poster_path
                    })));
                }
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }

        // Fetch movie suggestions for the second appearance input
        if (name === 'secondAppearance' && formData.secondActor) {
            try {
                const actor = secondActorSuggestions.find(actor => actor.name === formData.secondActor);
                if (actor) {
                    const response = await axios.get(`https://api.themoviedb.org/3/person/${actor.id}/movie_credits?api_key=${apiKey}`);
                    setSecondMovieSuggestions(response.data.cast.map(movie => ({
                        id: movie.id,
                        title: movie.title,
                        posterPath: movie.poster_path
                    })));
                }
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }
    };

    const handleActorSelect = (actor, actorType) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [actorType]: actor.name
        }));
        if (actorType === 'firstActor') {
            setFirstActorSuggestions([]);
        } else if (actorType === 'secondActor') {
            setSecondActorSuggestions([]);
        }
    };

    const handleMovieSelect = (movie, appearanceType) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [appearanceType]: movie.title
        }));
        if (appearanceType === 'firstAppearance') {
            setFirstMovieSuggestions([]);
        } else if (appearanceType === 'secondAppearance') {
            setSecondMovieSuggestions([]);
        }
    };

    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: formData });
        closeModal();
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <Button variant='contained' onClick={openModal}>Create New Script</Button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="New Script Modal">
                <form>
                    {/* Actor and movie input fields for the first actor */}
                    <div>
                        <label>
                            First Actor:
                            <input type="text" name="firstActor" value={formData.firstActor} onChange={handleChange} />
                        </label>
                        <ul>
                            {firstActorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor, 'firstActor')}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>

                        <label>
                            First Appearance:
                            <input type="text" name="firstAppearance" value={formData.firstAppearance} onChange={handleChange} />
                        </label>
                        <ul>
                            {firstMovieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie, 'firstAppearance')}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Actor and movie input fields for the second actor */}
                    <div>
                        <label>
                            Second Actor:
                            <input type="text" name="secondActor" value={formData.secondActor} onChange={handleChange} />
                        </label>
                        <ul>
                            {secondActorSuggestions.map(actor => (
                                <li key={actor.id} onClick={() => handleActorSelect(actor, 'secondActor')}>
                                    <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
                                    {actor.name}
                                </li>
                            ))}
                        </ul>

                        <label>
                            Second Appearance:
                            <input type="text" name="secondAppearance" value={formData.secondAppearance} onChange={handleChange} />
                        </label>
                        <ul>
                            {secondMovieSuggestions.map(movie => (
                                <li key={movie.id} onClick={() => handleMovieSelect(movie, 'secondAppearance')}>
                                    <img src={`https://image.tmdb.org/t/p/w200${movie.posterPath}`} alt={movie.title} />
                                    {movie.title}
                                </li>
                            ))}
                        </ul>
                    </div>

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