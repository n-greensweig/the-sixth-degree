import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function NewGame() {

  const dispatch = useDispatch();

  // GET request to display user's scripts on the DOM
  const scripts = useSelector((store) => store.scriptReducer);

  const handleClick = (e) => {
    e.preventDefault();

    // Create new game in DB
    dispatch({ type: 'CREATE_GAME' });
  };

  useEffect(() => {
    dispatch({ type: 'FETCH_SCRIPTS' });
  }, []);

  return (
    <body>
      <h1>Pick 3 Scripts!</h1>
      {/* Map over the scripts to display on the DOM */}
      {scripts?.map(script => (
        <p>{script.first_actor} to {script.seventh_actor}</p>
        ))}

      <button className="create-game-btn" onClick={e => handleClick(e)}> Create Game </button>

      <li className="container">Jennifer Aniston to Ben Stiller
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <li className="container">Dwayne Johnson to Jennifer Lopez
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <li className="container">Ryan Reynolds to Queen Latifah
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <li className="container">Shaq to Brad Pitt
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>
      <li className="container">George Clooney to Robert Downey Jr
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <li className="container">Tyler Perry to Merryll Streep
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <li className="container">Ryan Gosling to Matthew McConaughey
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <li className="container">Margot Robbie to Arnold Schwarzenegger
        <input type="checkbox"></input>
        <span className="checkmark"></span>
      </li>

      <button className="create-script-btn"> Create New Script </button>
    </body>
  )
}


export default NewGame;