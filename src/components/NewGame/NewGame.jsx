import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NewScript from '../NewScript3/NewScript3';
import Button from '@mui/material/Button';

function NewGame() {

    return (
        <body>
            <h1>Pick 3 Scripts!</h1>
            <button className="create-game-btn"> Create Game </button>

            <ul>
                     <li class="container">Jennifer Aniston to Ben Stiller
   <input type="checkbox"></input>
   <span class="checkmark"></span>
</li>

 <li class="container">Dwayne Johnson to Jennifer Lopez
   <input type="checkbox"></input>
  <span class="checkmark"></span>
 </li>

 <li class="container">Ryan Reynolds to Queen Latifah
   <input type="checkbox"></input>
   <span class="checkmark"></span>
 </li>

 <li class="container">Shaq to Brad Pitt
  <input type="checkbox"></input>
  <span class="checkmark"></span>
 </li>
 <li class="container">George Clooney to Robert Downey Jr
   <input type="checkbox"></input>
  <span class="checkmark"></span>
 </li>
 <li class="container">Tyler Perry to Merryll Streep
  <input type="checkbox"></input>
   <span class="checkmark"></span>
 </li>

 <li class="container">Ryan Gosling to Matthew McConaughey
   <input type="checkbox"></input>
  <span class="checkmark"></span>
 </li>

 <li class="container">Margot Robbie to Arnold Schwarzenegger
   <input type="checkbox"></input>
 <span class="checkmark"></span>
 </li>
            </ul>


            {/* Modal for creating new script, appears as button */}
            {<NewScript />}

        </body>
    )
}

export default NewGame;



