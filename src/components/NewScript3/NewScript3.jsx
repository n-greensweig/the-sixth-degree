import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import Button from '@mui/material/Button';
import Modal from 'react-modal';




function NewScript() {

    const dispatch = useDispatch();

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



    // Holds actor and movie suggestions separately for each input
    const [firstActorSuggestions, setFirstActorSuggestions] = useState([]);
    const [secondActorSuggestions, setSecondActorSuggestions] = useState([]);
    const [thirdActorSuggestions, setThirdActorSuggestions] = useState([]);
    const [fourthActorSuggestions, setFourthActorSuggestions] = useState([]);
    const [fifthActorSuggestions, setFifthActorSuggestions] = useState([]);
    const [sixthActorSuggestions, setSixthActorSuggestions] = useState([]);
    const [seventhActorSuggestions, setSeventhActorSuggestions] = useState([]);



    const [movieSuggestions, setMovieSuggestions] = useState([]);
    const [secondMovieSuggestions, setSecondMovieSuggestions] = useState([]);
    const [thirdMovieSuggestions, setThirdMovieSuggestions] = useState([]);
    const [fourthMovieSuggestions, setFourthMovieSuggestions] = useState([]);
    const [fifthMovieSuggestions, setFifthMovieSuggestions] = useState([]);
    const [sixthMovieSuggestions, setSixthMovieSuggestions] = useState([]);



    // Holds selected actor
    const [selectedActor, setSelectedActor] = useState(null);
    const [selectedSecondActor, setSelectedSecondActor] = useState(null);
    const [selectedThirdActor, setSelectedThirdActor] = useState(null);
    const [selectedFourthActor, setSelectedFourthActor] = useState(null);
    const [selectedFifthActor, setSelectedFifthActor] = useState(null);
    const [selectedSixthActor, setSelectedSixthActor] = useState(null);
    const [selectedSeventhActor, setSelectedSeventhActor] = useState(null);





    // Modal state
    const [modalIsOpen, setModalIsOpen] = useState(false);


    // Jama's API Key
    const apiKey = '30c198675e2638514ba7c9dc7212193c';


    // Handle input field changes
    const handleChange = async (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });



 

        // Fetch first actor suggestions
        if (name === 'firstActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setFirstActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch second actor suggestions
        if (name === 'secondActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setSecondActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch third actor suggestions
        if (name === 'thirdActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setThirdActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch fourth actor suggestions
        if (name === 'fourthActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setFourthActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch fifth actor suggestions
        if (name === 'fifthActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setFifthActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch sixth actor suggestions
        if (name === 'sixthActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setSixthActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }


        // Fetch seventh actor suggestions
        if (name === 'seventhActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                setSeventhActorSuggestions(response.data.results);
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch first actor's movie suggestions
        if (name === 'firstAppearance' && selectedActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedActor.id}/movie_credits?api_key=${apiKey}`);
                setMovieSuggestions(response.data.cast.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.poster_path
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }



        // Fetch second actor's movie suggestions
        if (name === 'secondAppearance' && selectedSecondActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedSecondActor.id}/movie_credits?api_key=${apiKey}`);
                setSecondMovieSuggestions(response.data.cast.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.poster_path
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }



        // Fetch third actor's movie suggestions
        if (name === 'thirdAppearance' && selectedThirdActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedThirdActor.id}/movie_credits?api_key=${apiKey}`);
                setThirdMovieSuggestions(response.data.cast.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.poster_path
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }



        // Fetch fourth actor's movie suggestions
        if (name === 'fourthAppearance' && selectedFourthActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedFourthActor.id}/movie_credits?api_key=${apiKey}`);
                setFourthMovieSuggestions(response.data.cast.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.poster_path
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }



        // Fetch fifth actor's movie suggestions
        if (name === 'fifthAppearance' && selectedFifthActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedFifthActor.id}/movie_credits?api_key=${apiKey}`);
                setFifthMovieSuggestions(response.data.cast.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.poster_path
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }



        // Fetch sixth actor's movie suggestions
        if (name === 'sixthAppearance' && selectedSixthActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedSixthActor.id}/movie_credits?api_key=${apiKey}`);
                setSixthMovieSuggestions(response.data.cast.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: movie.poster_path
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }
    };








    // Select an actor from suggestions
    const handleActorSelect = (actor, type) => {
        if (type === 'first') {
            setSelectedActor(actor);
            setFormData({
                ...formData,
                firstActor: actor.name
            });
            setFirstActorSuggestions([]);
        } else if (type === 'second') {
            setSelectedSecondActor(actor);
            setFormData({
                ...formData,
                secondActor: actor.name
            });
            setSecondActorSuggestions([]);
        }
        else if (type === 'third') {
            setSelectedThirdActor(actor);
            setFormData({
                ...formData,
                thirdActor: actor.name
            });
            setThirdActorSuggestions([]);
        }
        else if (type === 'fourth') {
            setSelectedFourthActor(actor);
            setFormData({
                ...formData,
                fourthActor: actor.name
            });
            setFourthActorSuggestions([]);
        }
        else if (type === 'fifth') {
            setSelectedFifthActor(actor);
            setFormData({
                ...formData,
                fifthActor: actor.name
            });
            setFifthActorSuggestions([]);
        }
        else if (type === 'sixth') {
            setSelectedSixthActor(actor);
            setFormData({
                ...formData,
                sixthActor: actor.name
            });
            setSixthActorSuggestions([]);
        }
        else if (type === 'seventh') {
            setSelectedSeventhActor(actor);
            setFormData({
                ...formData,
                seventhActor: actor.name
            });
            setSeventhActorSuggestions([]);
        }
    };





    // Select a movie from suggestions
    const handleMovieSelect = (movie, type) => {
        if (type === 'first') {
            setFormData({
                ...formData,
                firstAppearance: movie.title
            });
            setMovieSuggestions([]);
        } else if (type === 'second') {
            setFormData({
                ...formData,
                secondAppearance: movie.title
            });
            setSecondMovieSuggestions([]);
        }
        else if (type === 'third') {
            setFormData({
                ...formData,
                thirdAppearance: movie.title
            });
            setThirdMovieSuggestions([]);
        }
        else if (type === 'fourth') {
            setFormData({
                ...formData,
                fourthAppearance: movie.title
            });
            setFourthMovieSuggestions([]);
        }
        else if (type === 'fifth') {
            setFormData({
                ...formData,
                fifthAppearance: movie.title
            });
            setFifthMovieSuggestions([]);
        }
        else if (type === 'sixth') {
            setFormData({
                ...formData,
                sixthAppearance: movie.title
            });
            setSixthMovieSuggestions([]);
        }
    };









    // Submit form
    const handleSubmit = () => {
        dispatch({ type: 'POST_SCRIPT', payload: formData });
        closeModal();
    };

    // Modal functions
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <>
            <Button variant='contained' onClick={openModal}>Create New Script</Button>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="New Script Modal">
                <form>
                    {/* First Actor and Appearance Input Fields */}
                    <label>
                        First Actor:
                        <input 
                        type="text" 
                        placeholder='First Actor'
                        name="firstActor" 
                        value={formData.firstActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {firstActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'first')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

                    <label>
                        First Appearance:
                        <input 
                        type="text" 
                        placeholder='First Appearance'
                        name="firstAppearance" 
                        value={formData.firstAppearance} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {movieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'first')}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>

                    {/* Second Actor and Appearance Input Fields */}
                    <label>
                        Second Actor:
                        <input 
                        type="text"
                        placeholder="Second Actor" 
                        name="secondActor" 
                        value={formData.secondActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {secondActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'second')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

                    <label>
                        Second Appearance:
                        <input 
                        type="text"
                        placeholder="Second Appearance"
                        name="secondAppearance" 
                        value={formData.secondAppearance} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {secondMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'second')}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>

                    {/* Third Actor and Appearance Input Fields */}
                    <label>
                        Third Actor:
                        <input 
                        type="text"
                        placeholder="Third Actor" 
                        name="thirdActor" 
                        value={formData.thirdActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {thirdActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'third')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

                    <label>
                        Third Appearance:
                        <input 
                        type="text" 
                        placeholder="Third Appearance"
                        name="thirdAppearance" 
                        value={formData.thirdAppearance} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {thirdMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'third')}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>

                    {/* Fourth Actor and Appearance Input Fields */}
                    <label>
                        Fourth Actor:
                        <input 
                        type="text" 
                        placeholder="Fourth Actor"
                        name="fourthActor" 
                        value={formData.fourthActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {fourthActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'fourth')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

                    <label>
                        Fourth Appearance:
                        <input 
                        type="text" 
                        placeholder="Fourth Appearance"
                        name="fourthAppearance" 
                        value={formData.fourthAppearance} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {fourthMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'fourth')}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>

                    {/* Fifth Actor and Appearance Input Fields */}
                    <label>
                        Fifth Actor:
                        <input 
                        type="text" 
                        placeholder="Fifth Actor"
                        name="fifthActor" 
                        value={formData.fifthActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {fifthActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'fifth')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

                    <label>
                        Fifth Appearance:
                        <input 
                        type="text" 
                        placeholder="Fifth Appearance"
                        name="fifthAppearance" 
                        value={formData.fifthAppearance} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {fifthMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'fifth')}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>

                    {/* Sixth Actor and Appearance Input Fields */}
                    <label>
                        Sixth Actor:
                        <input 
                        type="text" 
                        placeholder="Sixth Actor"
                        name="sixthActor" 
                        value={formData.sixthActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {sixthActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'sixth')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

                    <label>
                        Sixth Appearance:
                        <input 
                        type="text" 
                        placeholder="Sixth Appearance"
                        name="sixthAppearance" 
                        value={formData.sixthAppearance} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {sixthMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'sixth')}>
                                {movie.title}
                            </li>
                        ))}
                    </ul>

                    {/* Seventh Actor Input Field */}
                    <label>
                        Seventh Actor:
                        <input 
                        type="text" 
                        placeholder="Seventh Actor"
                        name="seventhActor" 
                        value={formData.seventhActor} 
                        onChange={handleChange} />
                    </label>
                    <ul>
                        {seventhActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'seventh')}>
                                {actor.name}
                            </li>
                        ))}
                    </ul>

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