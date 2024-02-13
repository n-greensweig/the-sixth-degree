import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// login and registration
import LoginForm from '../LoginForm/LoginForm';
import RegisterForm from '../RegisterForm/RegisterForm';


function LandingPage() {
  const [heading, setHeading] = useState('Welcome');

  // variables
  const [login, setLogin] = useState(true); // toggle for login display

  // Function - toggle login and register boxes
  const loginOrRegister = (event) => {
    setLogin(!login);
    console.log(`login`, login);
  };




  return (
    <div className="landingPage">

      <div className='chevDiv'>
        <div className='chevRow'>
          <div className='chevTop'></div>
          <div className='chevTop white'></div>
          <div className='chevTop'></div>
          <div className='chevTop blue'></div>
          <div className='chevTop red'></div>
          <div className='chevTop yellow'></div>
        </div>
        <div className='chevRow'>
          <div className='chevBot'></div>
          <div className='chevBot white'></div>
          <div className='chevBot'></div>
          <div className='chevBot blue'></div>
          <div className='chevBot red'></div>
          <div className='chevBot yellow'></div>
        </div>
      </div>



{/* meat of the page */}
      <div className='loginDiv'>
        <div className='sixthLogo'>
          <h2>The</h2>
          <h2>Sixth</h2>
          <h2>Degree</h2>
        </div>

        <div>
          <div className={login ? 'visible' : 'invisible'}>
            <LoginForm />
          </div>
          <div className={login ? 'invisible' : 'visible'}>
            <RegisterForm />
          </div>
          <div className={login ? 'visible' : 'invisible'}>
            <button className="btn" onClick={loginOrRegister}>
              Register
            </button>
          </div>
          <div className={login ? 'invisible' : 'visible'}>
            <button className="btn" onClick={loginOrRegister}>
              Login
            </button>
          </div>
        </div>
      </div>
{/* meat of the page */}



<div className='chevDivRev'>
        <div className='chevRow'>
          <div className='chevTop yellow'></div>
          <div className='chevTop red'></div>
          <div className='chevTop blue'></div>
          <div className='chevTop'></div>
          <div className='chevTop white'></div>
          <div className='chevTop'></div>
        </div>
        <div className='chevRow'>
          <div className='chevBot yellow'></div>
          <div className='chevBot red'></div>
          <div className='chevBot blue'></div>
          <div className='chevBot'></div>
          <div className='chevBot white'></div>
          <div className='chevBot'></div>
        </div>
      </div>



    </div>
  );
}

export default LandingPage;
