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
  );
}

export default LandingPage;
