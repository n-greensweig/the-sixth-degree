import { Box, FormControl, TextField, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../Nav/Nav.jsx";
import axios from 'axios';
import "./ActiveGame.css";



function ActiveGame() {


  const dispatch = useDispatch();
  const history = useHistory();
  const activeScriptsToGuess = useSelector((store) => store.scriptReducer);



  const [guess, setGuess] = useState({
    second_actor_id: null,
    third_actor_id: null,
    fourth_actor_id: null,
    fifth_actor_id: null,
    sixth_actor_id: null,
  });


  const [secondActorSuggestions, setSecondActorSuggestions] = useState([]);
  const [thirdActorSuggestions, setThirdActorSuggestions] = useState([]);
  const [fourthActorSuggestions, setFourthActorSuggestions] = useState([]);
  const [fifthActorSuggestions, setFifthActorSuggestions] = useState([]);
  const [sixthActorSuggestions, setSixthActorSuggestions] = useState([]);



  const [secondMovieSuggestions, setSecondMovieSuggestions] = useState([]);
  const [thirdMovieSuggestions, setThirdMovieSuggestions] = useState([]);
  const [fourthMovieSuggestions,setFourthMovieSuggestions] = useState([]);
  const [fifthMovieSuggestions, setFifthMovieSuggestions] = useState([]);
  const [sixthMovieSuggestions, setSixthMovieSuggestions] = useState([]);
  const { id } = useParams();


 // variable URL for TMDB images
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    // Jama's API Key
  const apiKey = '30c198675e2638514ba7c9dc7212193c';





  useEffect(() => {
    dispatch({ type: "FETCH_ACTIVE_SCRIPT", payload: id });
  }, [dispatch, id]);




  useEffect(() => {
    if (activeScriptsToGuess && activeScriptsToGuess.length > 0) {
      setGuess(activeScriptsToGuess[0]);
    } else {
      history.push('/'); // Redirect to home page if there are no active scripts
    }
  }, [activeScriptsToGuess, history]);




    // Fetches second actor suggestions based on user input
    const fetchSecondActorSuggestions = async (query) => {
      if (!query) return;
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
        // Variable to filter results so only actors with profile images appear
        const actorsWithImages = response.data.results.filter(actor => actor.profile_path !== null);
        setSecondActorSuggestions(actorsWithImages);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };


  // Fetches third actor suggestions based on user input
  const fetchThirdActorSuggestions = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
      // Variable to filter results so only actors with profile images appear
      const actorsWithImages = response.data.results.filter(actor => actor.profile_path !== null);
      setThirdActorSuggestions(actorsWithImages);
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };
  



  // Fetches fourth actor suggestions based on user input
  const fetchFourthActorSuggestions = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
      // Variable to filter results so only actors with profile images appear
      const actorsWithImages = response.data.results.filter(actor => actor.profile_path !== null);
      setFourthActorSuggestions(actorsWithImages);
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };
  



    // Fetches fifth actor suggestions based on user input
    const fetchFifthActorSuggestions = async (query) => {
      if (!query) return;
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
        // Variable to filter results so only actors with profile images appear
        const actorsWithImages = response.data.results.filter(actor => actor.profile_path !== null);
        setFifthActorSuggestions(actorsWithImages);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };
  
    



      // Fetches sixth actor suggestions based on user input
  const fetchSixthActorSuggestions = async (query) => {
    if (!query) return;
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
      // Variable to filter results so only actors with profile images appear
      const actorsWithImages = response.data.results.filter(actor => actor.profile_path !== null);
      setSixthActorSuggestions(actorsWithImages);
    } catch (error) {
      console.error("Error fetching actors:", error);
    }
  };
  





    // Fetches second movie suggestions based on selected actor and user input
    const fetchSecondMovieSuggestions = async (query) => {
      const actorId = guess.third_actor_id; // Ensure you have this ID available in your state
      if (!query || !actorId) return;
    
      try {
        // Using the /discover/movie endpoint with the with_cast parameter
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&query=${encodeURIComponent(query)}`);
        // Variable to filter results to only include movies with poster images
        const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null);
        setSecondMovieSuggestions(moviesWithPosters);
      } catch (error) {
        console.error("Error fetching movies for actor:", error);
      }
    };
  
    




  // Fetches third movie suggestions based on selected actor and user input
  const fetchThirdMovieSuggestions = async (query) => {
    const actorId = guess.third_actor_id; // Ensure you have this ID available in your state
    if (!query || !actorId) return;
  
    try {
      // Using the /discover/movie endpoint with the with_cast parameter
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&query=${encodeURIComponent(query)}`);
      // Variable to filter results to only include movies with poster images
      const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null);
      setThirdMovieSuggestions(moviesWithPosters);
    } catch (error) {
      console.error("Error fetching movies for actor:", error);
    }
  };
  
  
  // Fetches fourth movie suggestions based on selected actor and user input
  const fetchFourthMovieSuggestions = async (query) => {
    const actorId = guess.third_actor_id; // Ensure you have this ID available in your state
    if (!query || !actorId) return;
  
    try {
      // Using the /discover/movie endpoint with the with_cast parameter
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&query=${encodeURIComponent(query)}`);
      // Variable to filter results to only include movies with poster images
      const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null);
      setFourthMovieSuggestions(moviesWithPosters);
    } catch (error) {
      console.error("Error fetching movies for actor:", error);
    }
  };
  



    // Fetches fifth movie suggestions based on selected actor and user input
    const fetchFifthMovieSuggestions = async (query) => {
      const actorId = guess.third_actor_id; // Ensure you have this ID available in your state
      if (!query || !actorId) return;
    
      try {
        // Using the /discover/movie endpoint with the with_cast parameter
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&query=${encodeURIComponent(query)}`);
        // Variable to filter results to only include movies with poster images
        const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null);
        setFifthMovieSuggestions(moviesWithPosters);
      } catch (error) {
        console.error("Error fetching movies for actor:", error);
      }
    };
  
    



      // Fetches sixth movie suggestions based on selected actor and user input
  const fetchSixthMovieSuggestions = async (query) => {
    const actorId = guess.third_actor_id; // Ensure you have this ID available in your state
    if (!query || !actorId) return;
  
    try {
      // Using the /discover/movie endpoint with the with_cast parameter
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_cast=${actorId}&query=${encodeURIComponent(query)}`);
      // Variable to filter results to only include movies with poster images
      const moviesWithPosters = response.data.results.filter(movie => movie.poster_path !== null);
      setSixthMovieSuggestions(moviesWithPosters);
    } catch (error) {
      console.error("Error fetching movies for actor:", error);
    }
  };
  




// Need to implement the rest
  const handleActorChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, third_actor_guess: value });
    fetchThirdActorSuggestions(value);
  };

  const handleMovieChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, third_appearance_guess: value });
    fetchThirdMovieSuggestions(value);
  };





  const handleSubmit = () => {
    setGuess({});
    dispatch({ type: "SUBMIT_GUESS", payload: { guess: { ...guess, complete: true }, id } });
  };

  const handleSave = () => {
    setGuess({});
    dispatch({ type: "SUBMIT_GUESS", payload: { guess: { ...guess, complete: false }, id } });
  };










  return (
    <Box
      component="form"
      noValidate
      sx={{
        mt: 1,
        alignItems: "center",
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <h2>Active game</h2>
      <br />
      {activeScriptsToGuess && guess && activeScriptsToGuess.length > 0 ? (
        <FormControl>



          <TextField
              id="outlined-start-adornment"
              color="secondary"
              required
              fullWidth
              disabled
              value={guess.first_actor ?? ''}
            />



            <TextField
              // label="Is in:"
              id="outlined-start-adornment"
              color="secondary"
              required
              fullWidth
              value={guess.first_appearance_guess ?? ''}
              onChange={(e) =>
                setGuess({
                  ...guess,
                  first_appearance_guess: e.target.value,
                })
              }
            />





            <TextField
              // label="With:"
              id="outlined-start-adornment"
              required
              fullWidth
              value={guess.second_actor_guess ?? ''}
              onChange={(e) => setGuess({ ...guess, second_actor_guess: e.target.value })}
            />



            <TextField
              // label="Who is in:"
              required
              fullWidth
              value={guess.second_appearance_guess ?? ''}
              onChange={(e) =>
                setGuess({ ...guess, second_appearance_guess: e.target.value })
              }
            />





          {/* Modified TextField for third_actor_guess */}
          <TextField
            id="third_actor_guess"
            color="success"
            required
            fullWidth
            value={guess.third_actor_guess ?? ''}
            onChange={handleActorChange}
            label="Search and select an actor"
          />
{thirdActorSuggestions.map((actor) => (
  <div key={actor.id} onClick={() => {
    // Update this section to also include the actor's ID
    setGuess({ 
      ...guess, 
      third_actor_guess: actor.name, 
      third_actor_id: actor.id  
    });
    setThirdActorSuggestions([]); // Clear suggestions after selection
  }} style={{ cursor: "pointer", margin: "10px 0" }}>
    {actor.profile_path && (
      <img src={`${IMAGE_BASE_URL}${actor.profile_path}`} alt={actor.name} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
    )}
    {actor.name}
  </div>
))}



          {/* Modified TextField for third_appearance_guess */}
          <TextField
            id="third_appearance_guess"
            color="success"
            required
            fullWidth
            value={guess.third_appearance_guess ?? ''}
            onChange={handleMovieChange}
            label="Search and select a movie"
          />
{thirdMovieSuggestions.map((movie) => (
  <div key={movie.id} onClick={() => {
    setGuess({ ...guess, third_appearance_guess: movie.title });
    setThirdMovieSuggestions([]); // Clear suggestions after selection
  }} style={{ cursor: "pointer", margin: "10px 0" }}>
    {movie.poster_path && (
      <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
    )}
    {movie.title}
  </div>
))}





          <TextField
              // label="With:"
              id="outlined-start-adornment"
              color="warning"
              required
              fullWidth
              value={guess.fourth_actor_guess ?? ''}
              onChange={(e) => setGuess({ ...guess, fourth_actor_guess: e.target.value })}
            />



            <TextField
              // label="Who is in:"
              id="outlined-start-adornment"
              color="warning"
              required
              fullWidth
              value={guess.fourth_appearance_guess ?? ''}
              onChange={(e) =>
                setGuess({ ...guess, fourth_appearance_guess: e.target.value })
              }
            />






            <TextField
              // label="With:"
              id="outlined-start-adornment"
              color="secondary"
              required
              fullWidth
              value={guess.fifth_actor_guess ?? ''}
              onChange={(e) => setGuess({ ...guess, fifth_actor_guess: e.target.value })}
            />




            <TextField
              // label="Who is in:"
              id="outlined-start-adornment"
              color="secondary"
              required
              fullWidth
              value={guess.fifth_appearance_guess ?? ''}
              onChange={(e) =>
                setGuess({ ...guess, fifth_appearance_guess: e.target.value })
              }
            />






            <TextField
              // label="With:"
              id="outlined-start-adornment"
              color="error"
              required
              fullWidth
              value={guess.sixth_actor_guess ?? ''}
              onChange={(e) => setGuess({ ...guess, sixth_actor_guess: e.target.value })}
            />



            <TextField
              // label="Who is in:"
              id="outlined-start-adornment"
              color="error"
              required
              fullWidth
              value={guess.sixth_appearance_guess ?? ''}
              onChange={(e) =>
                setGuess({ ...guess, sixth_appearance_guess: e.target.value })
              }
            />






            <TextField
              id="outlined-start-adornment"
              required
              fullWidth
              disabled
              value={guess.seventh_actor ?? ''}
            />





              <br/>
          <Button type="submit" variant="contained" onClick={() => handleSubmit()}>
            Submit
          </Button>
          <br />

          <Button type="submit" variant="contained" onClick={() => handleSave()}>
            Save for later
          </Button>

        </FormControl>
      ) : (
        <h3>There are no active games to guess on at this time.</h3>
      )}
    </Box>
  );
}




export default ActiveGame;