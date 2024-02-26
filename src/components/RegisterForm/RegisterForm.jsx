import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        firstName: firstName,
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (


    <div className='clapboard'>

      <form onSubmit={registerUser}>

      <div className='clapTop'>
          <div className='clapHinge'></div>
          <div className='clapStrip'>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp target'></div>
          </div>
        </div>


        <div className='clapBody'>
          {/* <div className='clapRowOne'>
            <div className='clapBoxOne'>
              <h2>Register User</h2>
            </div>
            <div className='clapBoxOne boxMid'></div>
            <div className='clapBoxOne'></div>
          </div> */}


          <div className='clapRowTwo'>
            <div className='clapLog'>
              <div className='clapBoxLog boxTop'>
                <h5>First Name</h5>
                <label htmlFor="firstName">
                  <input
                    type="text"
                    name="firstName"
                    className='txtBox'
                    required
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </label>
              </div>
              <div className='clapBoxLog boxTop'>
              <h5>Email</h5>
                <label htmlFor="username">
                  <input
                    type="text"
                    name="username"
                    className='txtBox'
                    value={username}
                    required
                    onChange={(event) => setUsername(event.target.value)}
                  />
                </label>
              </div>
              <div className='clapBoxLog'>
              <h5>Password</h5>
                <label htmlFor="password">
                  <input
                    type="password"
                    name="password"
                    className='txtBox'
                    value={password}
                    required
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className='clapBoxTwo'>
              <input className="btn" type="submit" name="submit" value="Register" />
            </div>
          </div>

          <div className='clapRowThree'>
            <p>This is a little bit about The 6th Degree!</p>
          </div>
        </div>

        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}

      </form>

    </div>


  );
}

export default RegisterForm;