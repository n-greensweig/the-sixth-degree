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
      const actorId = guess.second_actor_id; // Ensure you have this ID available in your state
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
    const actorId = guess.fourth_actor_id; // Ensure you have this ID available in your state
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
      const actorId = guess.fifth_actor_id; // Ensure you have this ID available in your state
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
    const actorId = guess.sixth_actor_id; // Ensure you have this ID available in your state
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
  




// Handling changes for the second actor guess
const handleSecondActorChange = (event) => {
  const { value } = event.target;
  setGuess({ ...guess, second_actor_guess: value });
  fetchSecondActorSuggestions(value);
};

// Handling changes for the second movie guess
const handleSecondMovieChange = (event) => {
  const { value } = event.target;
  setGuess({ ...guess, second_appearance_guess: value });
  fetchSecondMovieSuggestions(value);
};


// Need to implement the rest
  const handleThirdActorChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, third_actor_guess: value });
    fetchThirdActorSuggestions(value);
  };

  const handleThirdMovieChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, third_appearance_guess: value });
    fetchThirdMovieSuggestions(value);
  };


  // Need to implement the rest
  const handleFourthActorChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, fourth_actor_guess: value });
    fetchFourthActorSuggestions(value);
  };

  const handleFourthMovieChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, fourth_appearance_guess: value });
    fetchFourthMovieSuggestions(value);
  };



  // Need to implement the rest
  const handleFifthActorChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, fifth_actor_guess: value });
    fetchFifthActorSuggestions(value);
  };

  const handleFifthMovieChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, fifth_appearance_guess: value });
    fetchFifthMovieSuggestions(value);
  };


  // Need to implement the rest
  const handleSixthActorChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, sixth_actor_guess: value });
    fetchSixthActorSuggestions(value);
  };

  const handleSixthMovieChange = (event) => {
    const { value } = event.target;
    setGuess({ ...guess, sixth_appearance_guess: value });
    fetchSixthMovieSuggestions(value);
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
              id="second_actor_guess"
              color="success"
              required
              fullWidth
              value={guess.second_actor_guess ?? ''}
              onChange={handleSecondActorChange}
              label="Search and select an actor"
            />
  {secondActorSuggestions.map((actor) => (
    <div key={actor.id} onClick={() => {
      // Update this section to also include the actor's ID
      setGuess({ 
        ...guess, 
        second_actor_guess: actor.name, 
        second_actor_id: actor.id  
      });
      setSecondActorSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {actor.profile_path && (
        <img src={`${IMAGE_BASE_URL}${actor.profile_path}`} alt={actor.name} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {actor.name}
    </div>
  ))}


            <TextField
              // label="Who is in:"
              id="second_appearance_guess"
              color="success"
              required
              fullWidth
              value={guess.second_appearance_guess ?? ''}
              onChange={handleSecondMovieChange}
              label="Search and select a movie"
            />
  {secondMovieSuggestions.map((movie) => (
    <div key={movie.id} onClick={() => {
      setGuess({ ...guess, second_appearance_guess: movie.title });
      setSecondMovieSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {movie.title}
    </div>
  ))}
  




          {/* Modified TextField for third_actor_guess */}
          <TextField
            id="third_actor_guess"
            color="success"
            required
            fullWidth
            value={guess.third_actor_guess ?? ''}
            onChange={handleThirdActorChange}
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
            onChange={handleThirdMovieChange}
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
              id="fourth_actor_guess"
              color="success"
              required
              fullWidth
              value={guess.fourth_actor_guess ?? ''}
              onChange={handleFourthActorChange}
              label="Search and select an actor"
            />
  {fourthActorSuggestions.map((actor) => (
    <div key={actor.id} onClick={() => {
      // Update this section to also include the actor's ID
      setGuess({ 
        ...guess, 
        fourth_actor_guess: actor.name, 
        fourth_actor_id: actor.id  
      });
      setFourthActorSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {actor.profile_path && (
        <img src={`${IMAGE_BASE_URL}${actor.profile_path}`} alt={actor.name} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {actor.name}
    </div>
  ))}


            <TextField
              // label="Who is in:"
              id="fourth_appearance_guess"
              color="success"
              required
              fullWidth
              value={guess.fourth_appearance_guess ?? ''}
              onChange={handleFourthMovieChange}
              label="Search and select a movie"
            />
  {fourthMovieSuggestions.map((movie) => (
    <div key={movie.id} onClick={() => {
      setGuess({ ...guess, fourth_appearance_guess: movie.title });
      setFourthMovieSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {movie.title}
    </div>
  ))}






            <TextField
              // label="With:"
              id="fifth_actor_guess"
              color="success"
              required
              fullWidth
              value={guess.fifth_actor_guess ?? ''}
              onChange={handleFifthActorChange}
              label="Search and select an actor"
            />
  {fifthActorSuggestions.map((actor) => (
    <div key={actor.id} onClick={() => {
      // Update this section to also include the actor's ID
      setGuess({ 
        ...guess, 
        fifth_actor_guess: actor.name, 
        fifth_actor_id: actor.id  
      });
      setFifthActorSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {actor.profile_path && (
        <img src={`${IMAGE_BASE_URL}${actor.profile_path}`} alt={actor.name} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {actor.name}
    </div>
  ))}



            <TextField
              // label="Who is in:"
              id="fifth_appearance_guess"
              color="success"
              required
              fullWidth
              value={guess.fifth_appearance_guess ?? ''}
              onChange={handleFifthMovieChange}
              label="Search and select a movie"
            />
  {fifthMovieSuggestions.map((movie) => (
    <div key={movie.id} onClick={() => {
      setGuess({ ...guess, fifth_appearance_guess: movie.title });
      setFifthMovieSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {movie.title}
    </div>
  ))}






            <TextField
              // label="With:"
              id="sixth_actor_guess"
              color="success"
              required
              fullWidth
              value={guess.sixth_actor_guess ?? ''}
              onChange={handleSixthActorChange}
              label="Search and select an actor"
            />
  {sixthActorSuggestions.map((actor) => (
    <div key={actor.id} onClick={() => {
      // Update this section to also include the actor's ID
      setGuess({ 
        ...guess, 
        sixth_actor_guess: actor.name, 
        sixth_actor_id: actor.id  
      });
      setSixthActorSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {actor.profile_path && (
        <img src={`${IMAGE_BASE_URL}${actor.profile_path}`} alt={actor.name} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {actor.name}
    </div>
  ))}


            <TextField
              // label="Who is in:"
              id="sixth_appearance_guess"
              color="success"
              required
              fullWidth
              value={guess.sixth_appearance_guess ?? ''}
              onChange={handleSixthMovieChange}
              label="Search and select a movie"
            />
  {sixthMovieSuggestions.map((movie) => (
    <div key={movie.id} onClick={() => {
      setGuess({ ...guess, sixth_appearance_guess: movie.title });
      setSixthMovieSuggestions([]); // Clear suggestions after selection
    }} style={{ cursor: "pointer", margin: "10px 0" }}>
      {movie.poster_path && (
        <img src={`${IMAGE_BASE_URL}${movie.poster_path}`} alt={movie.title} style={{ width: "50px", height: "auto", marginRight: "10px" }} />
      )}
      {movie.title}
    </div>
  ))}






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