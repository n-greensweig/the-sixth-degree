import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (

    <div className='clapboard'>

      <form onSubmit={registerUser}>

      <div className='clapTop'>
          <div className='clapStrip'>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
          </div>
          <div className='clapStrip'>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
          </div>
        </div>


        <div className='clapBody'>
          <div className='clapRowOne'>
            <div className='clapBoxOne'>
              <h2>Register User</h2>
            </div>
            <div className='clapBoxOne boxMid'></div>
            <div className='clapBoxOne'></div>
          </div>


          <div className='clapRowTwo'>
            <div className='clapLog'>
              <div className='clapBoxLog boxTop'>
                <label htmlFor="username">
                  E-mail:
                  <br />
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
                <label htmlFor="password">
                  Password:
                  <br />
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


