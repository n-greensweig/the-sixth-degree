import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (


    <div className='clapboard'>

      <form onSubmit={login}>

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

          <div className='clapRowTwo'>
            <div className='clapLog'>
              <div className='clapBoxLog boxTop'>
                <h5>Email</h5>
                <label htmlFor="username">
                  <input
                    type="text"
                    name="username"
                    className='txtBox'
                    required
                    value={username}
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
                    required
                    className='txtBox'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className='clapBoxTwo'>
              <input className="btn" type="submit" name="submit" value="Log In" />
            </div>
          </div>

          <div className='clapRowThree'>
            <p>This is a little bit about The 6th Degree!</p>
          </div>
        </div>

        {errors.loginMessage && (
          <h3 className="alert" role="alert">
            {errors.loginMessage}
          </h3>
        )}

      </form>

    </div>


  

  );
}

export default LoginForm;