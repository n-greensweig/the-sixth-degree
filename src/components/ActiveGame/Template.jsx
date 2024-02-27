import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import './NewScript3.css';




function NewScript() {

    let dispatch = useDispatch();

    let [formData, setFormData] = useState({
        firstActor: '',
        firstAppearance: '',
        secondActor: '',
        secondAppearance: '',

    });


    const handleAutofill = async () => {
        // Dummy Data
        let formData = {
            second_actor: "Christopher Patrick Nolan" ,
            second_appearance: "Lynn + Lucy",
            complete: true
        }};











    // Holds actor and movie suggestions separately for each input
    const [firstActorSuggestions, setFirstActorSuggestions] = useState([]);
    const [secondActorSuggestions, setSecondActorSuggestions] = useState([]);
 



    const [FirstMovieSuggestions, setFirstMovieSuggestions] = useState([]);
    const [secondMovieSuggestions, setSecondMovieSuggestions] = useState([]);




    // Holds selected actor
    const [selectedActor, setSelectedActor] = useState(null);
    const [selectedSecondActor, setSelectedSecondActor] = useState(null);






    // Modal state
    let [modalIsOpen, setModalIsOpen] = useState(false);


    // variable URL for TMDB images
    let IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";


    // Jama's API Key
    let apiKey = '30c198675e2638514ba7c9dc7212193c';


    // Handle input field changes
    const handleChange = async (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });



 

        // Fetch first actor suggestions
        if (name === 'firstActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                let filteredResults = response.data.results.filter(actor => actor.profile_path !== null);
                setFirstActorSuggestions(filteredResults.map(actor => ({
                    id: actor.id,
                    name: actor.name,
                    profilePath: actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : null,
                })));
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }



        // Fetch second actor suggestions
        if (name === 'secondActor') {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/person?query=${value}&api_key=${apiKey}`);
                let filteredResults = response.data.results.filter(actor => actor.profile_path !== null);
                setSecondActorSuggestions(filteredResults.map(actor => ({
                    id: actor.id,
                    name: actor.name,
                    profilePath: actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : null,
                })));
            } catch (error) {
                console.error('Error fetching actor suggestions:', error);
            }
        }





        // Fetch first actor's movie suggestions     
        // filtered out movies that don't have poster images, will implement to the others later!
        if (name === 'firstAppearance' && selectedActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedActor.id}/movie_credits?api_key=${apiKey}`);
                let filteredMovies = response.data.cast.filter(movie => movie.poster_path !== null);
                setFirstMovieSuggestions(filteredMovies.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: `${IMAGE_BASE_URL}${movie.poster_path}`
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }



        // Fetch second actor's movie suggestions
        if (name === 'secondAppearance' && selectedSecondActor) {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/person/${selectedSecondActor.id}/movie_credits?api_key=${apiKey}`);
                let filteredMovies = response.data.cast.filter(movie => movie.poster_path !== null);
                setSecondMovieSuggestions(filteredMovies.map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    posterPath: `${IMAGE_BASE_URL}${movie.poster_path}`
                })));
            } catch (error) {
                console.error('Error fetching movie suggestions:', error);
            }
        }







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
    };





    // Select a movie from suggestions
    const handleMovieSelect = (movie, type) => {
        if (type === 'first') {
            setFormData({
                ...formData,
                firstAppearance: movie.title
            });
            setFirstMovieSuggestions([]);
        } else if (type === 'second') {
            setFormData({
                ...formData,
                secondAppearance: movie.title
            });
            setSecondMovieSuggestions([]);
        }
    };










    const handleSubmit = async () => {
        // Mapping formData to match database column names
        let scriptData = {
            first_actor: formData.firstActor,
            first_appearance: formData.firstAppearance,
            second_actor: formData.secondActor,
            second_appearance: formData.secondAppearance,
        };
    
        try {
            const response = await axios.post('/api/script', scriptData);
            console.log(response.data); // Handle the response as needed
            closeModal(); // Closes the modal on successful submission
            dispatch({ type: 'FETCH_SCRIPTS' });
        } catch (error) {
            console.error('Error submitting script:', error);
        }
    };
    











    // Modal functions
    let openModal = () => setModalIsOpen(true);
    let closeModal = () => setModalIsOpen(false);

    
    return (
        <>
            <Button id="create-new-script-button" variant='contained' onClick={openModal}>Create New Script</Button>
            <Modal className='Modal' isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="New Script Modal">
                <form className='inputForm'>
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
                    <ul className="suggestions-list">
                        {firstActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'first')}>
                            {actor.profilePath && <img src={actor.profilePath} alt={actor.name} style={{ width: "50px", height: "auto" }} />}
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
                    <ul className="suggestions-list">
                        {FirstMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'first')}>
                            {movie.posterPath && <img src={movie.posterPath} alt={movie.title} style={{ width: "50px", height: "auto" }} />}
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
                    <ul className="suggestions-list">
                        {secondActorSuggestions.map(actor => (
                            <li key={actor.id} onClick={() => handleActorSelect(actor, 'second')}>
                            {actor.profilePath && <img src={actor.profilePath} alt={actor.name} style={{ width: "50px", height: "auto" }} />}
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
                    <ul className="suggestions-list">
                        {secondMovieSuggestions.map(movie => (
                            <li key={movie.id} onClick={() => handleMovieSelect(movie, 'second')}>
                            {movie.posterPath && <img src={movie.posterPath} alt={movie.title} style={{ width: "50px", height: "auto" }} />}
                            {movie.title}
                            </li>
                        ))}
                    </ul>

                    <Button variant='contained' onClick={handleSubmit}>Submit</Button>

                    <Button type="submit" variant="contained" style={{ backgroundColor: 'inherit', color: '#fcf7f7', boxShadow: 'none' }}
                     onClick={() => handleAutofill()}>
                         Fill Data
                         </Button>
                </form>
            </Modal>
        </>
    );
  }};

export default NewScript;




// import { Box, FormControl, TextField, Button } from "@mui/material";
// import React, { useState, useEffect } from "react";
// import { useParams, useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import Nav from "../Nav/Nav.jsx";
// import axios from 'axios';
// import "./ActiveGame.css";



// function ActiveGame() {


//   const dispatch = useDispatch();
//   const history = useHistory();
//   const activeScriptsToGuess = useSelector((store) => store.scriptReducer);



//   const [guess, setGuess] = useState({
//     // your existing fields,
//     third_actor_id: null,
//   });



//   const [thirdActorSuggestions, setThirdActorSuggestions] = useState([]);
//   const [thirdMovieSuggestions, setThirdMovieSuggestions] = useState([]);
//   const { id } = useParams();


//  // variable URL for TMDB images
//   const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
//     // Jama's API Key
//   const apiKey = '30c198675e2638514ba7c9dc7212193c';





//   useEffect(() => {
//     dispatch({ type: "FETCH_ACTIVE_SCRIPT", payload: id });
//   }, [dispatch, id]);




//   useEffect(() => {
//     if (activeScriptsToGuess && activeScriptsToGuess.length > 0) {
//       setGuess(activeScriptsToGuess[0]);
//     } else {
//       history.push('/'); // Redirect to home page if there are no active scripts
//     }
//   }, [activeScriptsToGuess, history]);




//   // Fetches third actor suggestions based on user input
//   const fetchThirdActorSuggestions = async (query) => {
//     if (!query) return;
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
//       // Variable to filter results so only actors with profile images appear
//       const actorsWithImages = response.data.results.filter(actor => actor.profile_path !== null);
//       setThirdActorSuggestions(actorsWithImages);
//     } catch (error) {
//       console.error("Error fetching actors:", error);
//     }
//   };
  



//   // Fetches third movie suggestions based on selected actor and user input
//   const fetchThirdMovieSuggestions = async (query) => {
//     const actorId = guess.third_actor_id; // Ensure you have this ID available in your state
//     if (!query || !actorId) return;
  
//     try {
//       // Using the /discover/movie endpoint with the with_cast parameter
//       const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&query=${encodeURIComponent(query)}`);
//       // Variable to filter results to only include movies with poster images
//       const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null);
//       setThirdMovieSuggestions(moviesWithPosters);
//     } catch (error) {
//       console.error("Error fetching movies for actor:", error);
//     }
//   };
  
  






//   const handleActorChange = (event) => {
//     const { value } = event.target;
//     setGuess({ ...guess, third_actor_guess: value });
//     fetchThirdActorSuggestions(value);
//   };

//   const handleMovieChange = (event) => {
//     const { value } = event.target;
//     setGuess({ ...guess, third_appearance_guess: value });
//     fetchThirdMovieSuggestions(value);
//   };

//   const handleSubmit = () => {
//     setGuess({});
//     dispatch({ type: "SUBMIT_GUESS", payload: { guess: { ...guess, complete: true }, id } });
//   };

//   const handleSave = () => {
//     setGuess({});
//     dispatch({ type: "SUBMIT_GUESS", payload: { guess: { ...guess, complete: false }, id } });
//   };










//   return (
//     <Box
//       component="form"
//       noValidate
//       sx={{
//         mt: 1,
//         alignItems: "center",
//         marginTop: 8,
//         display: "flex",
//         flexDirection: "column",
//       }}
//     >
//       <Nav />
//       <h2>Active game</h2>
//       <br />
//       {activeScriptsToGuess && guess && activeScriptsToGuess.length > 0 ? (
//         <FormControl>



//           <TextField
//               id="outlined-start-adornment"
//               color="secondary"
//               required
//               fullWidth
//               disabled
//               value={guess.first_actor ?? ''}
//             />



//             <TextField
//               // label="Is in:"
//               id="outlined-start-adornment"
//               color="secondary"
//               required
//               fullWidth
//               value={guess.first_appearance_guess ?? ''}
//               onChange={(e) =>
//                 setGuess({
//                   ...guess,
//                   first_appearance_guess: e.target.value,
//                 })
//               }
//             />





//             <TextField
//               // label="With:"
//               id="outlined-start-adornment"
//               required
//               fullWidth
//               value={guess.second_actor_guess ?? ''}
//               onChange={(e) => setGuess({ ...guess, second_actor_guess: e.target.value })}
//             />



//             <TextField
//               // label="Who is in:"
//               required
//               fullWidth
//               value={guess.second_appearance_guess ?? ''}
//               onChange={(e) =>
//                 setGuess({ ...guess, second_appearance_guess: e.target.value })
//               }
//             />





//           {/* Modified TextField for third_actor_guess */}
//           <TextField
//             id="third_actor_guess"
//             color="success"
//             required
//             fullWidth
//             value={guess.third_actor_guess ?? ''}
//             onChange={handleActorChange}
//             label="Search and select an actor"
//           />
// {thirdActorSuggestions.map((actor) => (
//   <div key={actor.id} onClick={() => {
//     // Update this section to also include the actor's ID
//     setGuess({ 
//       ...guess, 
//       third_actor_guess: actor.name, 
//       third_actor_id: actor.id  
//     });
//     setThirdActorSuggestions([]); // Clear suggestions after selection
//   }} style={{ cursor: "pointer", margin: "10px 0" }}>
//     {actor.profile_path && (
//       <img src={`${IMAGE_BASE_URL}${actor.profile_path}`} alt={actor.name} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
//     )}
//     {actor.name}
//   </div>
// ))}



//           {/* Modified TextField for third_appearance_guess */}
//           <TextField
//             id="third_appearance_guess"
//             color="success"
//             required
//             fullWidth
//             value={guess.third_appearance_guess ?? ''}
//             onChange={handleMovieChange}
//             label="Search and select a movie"
//           />
// {thirdMovieSuggestions.map((movie) => (
//   <div key={movie.id} onClick={() => {
//     setGuess({ ...guess, third_appearance_guess: movie.title });
//     setThirdMovieSuggestions([]); // Clear suggestions after selection
//   }} style={{ cursor: "pointer", margin: "10px 0" }}>
//     {movie.poster_path && (
//       <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
//     )}
//     {movie.title}
//   </div>
// ))}





//           <TextField
//               // label="With:"
//               id="outlined-start-adornment"
//               color="warning"
//               required
//               fullWidth
//               value={guess.fourth_actor_guess ?? ''}
//               onChange={(e) => setGuess({ ...guess, fourth_actor_guess: e.target.value })}
//             />



//             <TextField
//               // label="Who is in:"
//               id="outlined-start-adornment"
//               color="warning"
//               required
//               fullWidth
//               value={guess.fourth_appearance_guess ?? ''}
//               onChange={(e) =>
//                 setGuess({ ...guess, fourth_appearance_guess: e.target.value })
//               }
//             />






//             <TextField
//               // label="With:"
//               id="outlined-start-adornment"
//               color="secondary"
//               required
//               fullWidth
//               value={guess.fifth_actor_guess ?? ''}
//               onChange={(e) => setGuess({ ...guess, fifth_actor_guess: e.target.value })}
//             />




//             <TextField
//               // label="Who is in:"
//               id="outlined-start-adornment"
//               color="secondary"
//               required
//               fullWidth
//               value={guess.fifth_appearance_guess ?? ''}
//               onChange={(e) =>
//                 setGuess({ ...guess, fifth_appearance_guess: e.target.value })
//               }
//             />






//             <TextField
//               // label="With:"
//               id="outlined-start-adornment"
//               color="error"
//               required
//               fullWidth
//               value={guess.sixth_actor_guess ?? ''}
//               onChange={(e) => setGuess({ ...guess, sixth_actor_guess: e.target.value })}
//             />



//             <TextField
//               // label="Who is in:"
//               id="outlined-start-adornment"
//               color="error"
//               required
//               fullWidth
//               value={guess.sixth_appearance_guess ?? ''}
//               onChange={(e) =>
//                 setGuess({ ...guess, sixth_appearance_guess: e.target.value })
//               }
//             />






//             <TextField
//               id="outlined-start-adornment"
//               required
//               fullWidth
//               disabled
//               value={guess.seventh_actor ?? ''}
//             />





//               <br/>
//           <Button type="submit" variant="contained" onClick={() => handleSubmit()}>
//             Submit
//           </Button>
//           <br />

//           <Button type="submit" variant="contained" onClick={() => handleSave()}>
//             Save for later
//           </Button>

//         </FormControl>
//       ) : (
//         <h3>There are no active games to guess on at this time.</h3>
//       )}
//     </Box>
//   );
// }




// export default ActiveGame;