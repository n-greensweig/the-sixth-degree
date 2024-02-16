// Importing Reusable Button
import UniversalButton from "../UniversalButton/UniversalButton"; //For implementation in create new script button.
import { useHistory } from 'react-router-dom';


function NewGame() {


// Function that navigates to New Script page 3.0 once button is clicked
const NewScriptNavigater = () => {
  const history = useHistory();
  history.push('/NewScript'); //NewScript is the placeholder for the actual path, yet to be implemented.
};


     return (
        <body>
            <h1>Pick 3 Scripts!</h1>
            <button classname="create-game-btn"> Create Game </button> 

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

                {/* Create New Script Button Below! */}
<UniversalButton color="primary" onClick={NewScriptNavigater}>Create New Script?</UniversalButton>
        </body>
     )
}


export default NewGame;