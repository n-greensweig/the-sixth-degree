import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Importing Reusable Button
import UniversalButton from "../UniversalButton/UniversalButton"; //For implementation in create new script button.
import { useHistory } from 'react-router-dom';

import './NewGame.css'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

//FOR PICK SCRIPTS DROPDOWN

// import * as React from 'react';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import ListItemText from '@mui/material/ListItemText';
// import Select from '@mui/material/Select';
// import Checkbox from '@mui/material/Checkbox';

// FOR PICK SCRIPTS DROPDOWN

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// const names = [
//   'Dwayne Johnson to Jennifer Lopez',
//   'Ryan Reynolds to Queen Latifah',
//   'Shaq to Brad Pitt',
//   'George Clooney to Robert Downey Jr',
//   'Tyler Perry to Merryll Streep',
//   'Ryan Gosling to Matthew McConaughey',
//   'Margot Robbie to Arnold Schwarzenegger',
// ];


function NewGame() {
  
  //FOR PICK SCRIPTS DROPDOWN
        // const [personName, setPersonName] = React.useState([]);
      
        // const handleChange = (event) => {
        //   const {
        //     target: { value },
        //   } = event;
        //   setPersonName(
        //     // On autofill we get a stringified value.
        //     typeof value === 'string' ? value.split(',') : value,
        //   );
        // };
        // return (
        //     <div>
        //       <FormControl sx={{ m: 1, width: 300 }}>
        //         <InputLabel id="demo-multiple-checkbox-label">Pick 3 Scripts!</InputLabel>
        //         <Select
        //           labelId="demo-multiple-checkbox-label"
        //           id="demo-multiple-checkbox"
        //           multiple
        //           value={personName}
        //           onChange={handleChange}
        //           input={<OutlinedInput label="pick-3-scripts!" />}
        //           renderValue={(selected) => selected.join(', ')}
        //           MenuProps={MenuProps}
        //         >
        //           {names.map((name) => (
        //             <MenuItem key={name} value={name} > 
        //               <Checkbox checked={personName.indexOf(name) > -1} />
        //               <ListItemText primary={name} />
        //             </MenuItem>
        //           ))}
        //         </Select>
        //       </FormControl>
        //     </div>
        //   );}

  const dispatch = useDispatch();

  // GET request to display user's scripts on the DOM
  const scripts = useSelector((store) => store.scriptReducer);
  
  // Function that navigates to New Script page 3.0 once button is clicked
const NewScriptNavigater = () => {
  const history = useHistory();
  history.push('/NewScript'); //NewScript is the placeholder for the actual path, yet to be implemented.
};


  const handleClick = (e) => {
    e.preventDefault();

    // Create new game in DB
    dispatch({ type: 'CREATE_GAME' });
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_SCRIPTS' });
  }, []);

  return (
    <div>
            <h1>Pick 3 Scripts!</h1>
            <Button variant="contained" id="createGameBtn" onClick={e => handleClick(e)}> Create Game </Button>
{scripts?.map(script => (
        <p>{script.first_actor} to {script.seventh_actor}</p>
        ))}
<Paper elevation={24} id="scriptGame-list">
        <label className="container">Jennifer Aniston to Ben Stiller
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

<label className="container">Dwayne Johnson to Jennifer Lopez
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

<label className="container">Ryan Reynolds to Queen Latifah
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

<label className="container">Shaq to Brad Pitt
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>
<label className="container">George Clooney to Robert Downey Jr
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

<label className="container">Tyler Perry to Merryll Streep
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

<label className="container">Ryan Gosling to Matthew McConaughey
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

<label className="container">Margot Robbie to Arnold Schwarzenegger
  <input type="checkbox"></input>
  <span className="checkmark"></span>
</label>

        <h2 id="gameLinkHeader">Game Link:</h2>
        <li id="gameLink">url@url.com</li>
</Paper>
<Button variant="contained" id="createScriptBtn" onClick={NewScriptNavigater}> Create New Script </Button> 
        </div>
  )
}

export default NewGame;