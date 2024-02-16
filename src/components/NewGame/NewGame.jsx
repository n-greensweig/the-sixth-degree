import { useDispatch } from "react-redux";
function NewGame() {

  const dispatch = useDispatch();


  const handleClick = (e) => {
    e.preventDefault();
    
    // Create new game in DB
    dispatch({ type: 'CREATE_GAME' });
  };

  return (
    <body>
      <h1>Pick 3 Scripts!</h1>
      <button classname="create-game-btn" onClick={e => handleClick(e)}> Create Game </button>

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

      <button classname="create-script-btn"> Create New Script </button>
    </body>
  )
}


export default NewGame;