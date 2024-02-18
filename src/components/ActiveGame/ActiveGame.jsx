import { Box, FormControl, TextField, Button } from "@mui/material";
import React from "react";
import "./ActiveGame.css";

import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

function ActiveGame() {

  const dispatch = useDispatch();

  // GET request to display user's scripts on the DOM
  const scripts = useSelector((store) => store.scriptReducer);

  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: 'FETCH_ACTIVE_SCRIPT', payload: id });
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
      <h2>Active game</h2>
      {scripts?.map(script => (
        <p>{script.first_actor} to {script.seventh_actor}</p>
      ))}
      <br />
      <FormControl>
        <TextField
          label="Who:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          label="Is in:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          required
          fullWidth
        />
        <TextField label="Who is in:" required fullWidth />
        <TextField
          className="p3"
          label="With:"
          id="outlined-start-adornment"
          color="success"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="success"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          color="warning"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="warning"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="secondary"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          color="error"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          color="error"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          required
          fullWidth
        />
        <br />
        <Button type="submit" variant="contained">
          {" "}
          Sumbit{" "}
        </Button>
      </FormControl>
    </Box>
  );
}

export default ActiveGame;
