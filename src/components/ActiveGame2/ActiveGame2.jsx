import { Box, FormControl, TextField, Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

function ActiveGame2() {
  const history = useHistory();

  const click = () => {
    history.push("/ActiveGame3/:id");
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
      <h2>Active game2</h2>
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
        <Button onClick={click} type="submit" variant="contained">
          {" "}
          Sumbit{" "}
        </Button>
      </FormControl>
    </Box>
  );
}

export default ActiveGame2;
