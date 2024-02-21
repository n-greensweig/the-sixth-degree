import { Box, FormControl, TextField, Button } from "@mui/material";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function ActiveGame2() {
  const dispatch = useDispatch();
  const history = useHistory();

  // GET request to display user's active script to guess on the DOM
  const activeScriptToGuess = useSelector((store) => store.scriptReducer);
  const [guess, setGuess] = useState({
    first_actor: activeScriptToGuess.first_actor,
    seventh_actor: activeScriptToGuess.seventh_actor,
  });
  const { id } = useParams();

  // Submit user's guess
  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_GUESS", payload: { guess, id } });
    history.push("/activeGame3/:id"); // POST request to submit user's guess
  };
  // Save user's guess for later
  const handleSave = () =>
    dispatch({ type: "SAVE_GUESS", payload: { guess, id } }); // POST request to save user's guess without submitting

  useEffect(() => {
    dispatch({ type: "FETCH_ACTIVE_SCRIPT", payload: id });
  }, []);

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
      <h2>Active Game2</h2>
      <br />
      <FormControl>
        <TextField
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
          disabled
          value={activeScriptToGuess.first_actor}
        />
        <TextField
          label="Is in:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
          onChange={(e) =>
            setGuess({
              ...guess,
              first_actor: activeScriptToGuess.first_actor,
              first_appearance: e.target.value,
              seventh_actor: activeScriptToGuess.seventh_actor,
            })
          }
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          required
          fullWidth
          onChange={(e) => setGuess({ ...guess, second_actor: e.target.value })}
        />
        <TextField
          label="Who is in:"
          required
          fullWidth
          onChange={(e) =>
            setGuess({ ...guess, second_appearance: e.target.value })
          }
        />
        <TextField
          className="p3"
          label="With:"
          id="outlined-start-adornment"
          color="success"
          required
          fullWidth
          onChange={(e) => setGuess({ ...guess, third_actor: e.target.value })}
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="success"
          required
          fullWidth
          onChange={(e) =>
            setGuess({ ...guess, third_appearance: e.target.value })
          }
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          color="warning"
          required
          fullWidth
          onChange={(e) => setGuess({ ...guess, fourth_actor: e.target.value })}
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="warning"
          required
          fullWidth
          onChange={(e) =>
            setGuess({ ...guess, fourth_appearance: e.target.value })
          }
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
          onChange={(e) => setGuess({ ...guess, fifth_actor: e.target.value })}
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
          onChange={(e) =>
            setGuess({ ...guess, fifth_appearance: e.target.value })
          }
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          color="error"
          required
          fullWidth
          onChange={(e) => setGuess({ ...guess, sixth_actor: e.target.value })}
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="error"
          required
          fullWidth
          onChange={(e) =>
            setGuess({ ...guess, sixth_appearance: e.target.value })
          }
        />
        <TextField
          id="outlined-start-adornment"
          required
          fullWidth
          disabled
          value={activeScriptToGuess.seventh_actor}
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
        <Button type="submit" variant="contained" onClick={() => handleSave()}>
          Save for later
        </Button>
      </FormControl>
    </Box>
  );
}

export default ActiveGame2;
