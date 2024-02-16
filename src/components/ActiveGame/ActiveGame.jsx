import { Box, FormControl, TextField, Button } from "@mui/material";

import React from "react";
import "./ActiveGame.css";

function ActiveGame() {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <h2>Active game</h2>
      <br />
      <FormControl>
        <TextField
          label="Who:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="Is in:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="Who is in:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
          required
          fullWidth
        />
        <TextField
          label="With:"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            sx: {
              color: "black",
              backgroundColor: "white",
              "&.Mui-focused": { color: "black", backgroundColor: "white" },
            },
          }}
          variant="filled"
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
