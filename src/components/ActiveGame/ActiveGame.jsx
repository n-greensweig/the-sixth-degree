import { Box, FormControl, TextField, Button } from "@mui/material";
import "./ActiveGame.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Nav from "../Nav/Nav.jsx";

function ActiveGame() {
  const dispatch = useDispatch();
  const history = useHistory();

  // GET request to display user's active script to guess on the DOM
  const activeScriptsToGuess = useSelector((store) => store.scriptReducer);
  const [guess, setGuess] = useState({});
  const { id } = useParams();

  // Submit user's guess
  const handleSubmit = () => {
    setGuess({});
    dispatch({ type: "SUBMIT_GUESS", payload: { guess: {...guess, complete: true}, id } }); // POST request to submit user's guess
  };
  // Save user's guess for later
  const handleSave = () => {
    setGuess({});
    dispatch({ type: "SUBMIT_GUESS", payload: { guess: {...guess, complete: false}, id } }); // POST request to save user's guess without submitting
  }
    
  useEffect(() => {
    dispatch({ type: "FETCH_ACTIVE_SCRIPT", payload: id });
  }, []);

  useEffect(() => {
    console.log('Setting active script to guess:', activeScriptsToGuess[0]);
    setGuess(activeScriptsToGuess[0]);
  }, [activeScriptsToGuess]);

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
      {
        activeScriptsToGuess && guess && activeScriptsToGuess.length > 0 ? (
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
            <TextField
              className="p3"
              // label="With:"
              id="outlined-start-adornment"
              color="success"
              required
              fullWidth
              value={guess.third_actor_guess ?? ''}
              onChange={(e) => setGuess({ ...guess, third_actor_guess: e.target.value })}
            />
            <TextField
              // label="Who is in:"
              id="outlined-start-adornment"
              color="success"
              required
              fullWidth
              value={guess.third_appearance_guess ?? ''}
              onChange={(e) =>
                setGuess({ ...guess, third_appearance_guess: e.target.value })
              }
            />
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
            <br />
            <Button
              type="submit"
              variant="contained"
              onClick={() => handleSubmit()}
            >
              {" "}
              Sumbit{" "}
            </Button>
            <br />
            <Button type="submit" variant="contained" onClick={() => handleSave()}>
              Save for later
            </Button>
          </FormControl>
        ) : (
          <h3>There are no active games to guess on at this time.</h3>
        )
      }
      
    </Box>
  );
}

export default ActiveGame;
