import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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

  const newVariable = 'lalala'



  return (
    <div classNameName="container">

      <h2>{heading}</h2>

      <div>
        <div classNameName={login ? 'visible' : 'invisible'}>
          <LoginForm />
        </div>

        <div classNameName={login ? 'invisible' : 'visible'}>
          <RegisterForm />
        </div>

        <div classNameName={login ? 'visible' : 'invisible'}>
          <button classNameName="btn" onClick={loginOrRegister}>
            Register
          </button>
        </div>

        <div classNameName={login ? 'invisible' : 'visible'}>
          <button classNameName="btn" onClick={loginOrRegister}>
            Login
          </button>
        </div>
      </div>


      {/* clapboard */}

      <div className='clapboard'>

        <div className='clapTop'></div>

        <div className='clapBody'>

          <div className='clapRowOne'>
            <div className='clapBoxOne'></div>
            <div className='clapBoxOne boxMid'></div>
            <div className='clapBoxOne'></div>
          </div>

          <div className='clapRowTwo'>
            <div className='clapLog'>
              <div className='clapBoxLog boxTop'></div>
              <div className='clapBoxLog'></div>
            </div>
            <div className='clapBoxTwo'></div>
          </div>

          <div className='clapRowThree'></div>


        </div>

      </div>



    </div>
  );
}

export default LandingPage;
