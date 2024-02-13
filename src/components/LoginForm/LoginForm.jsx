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
          <div className='clapStrip'>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
            <div className='chevronUp'></div>
          </div>
          {/* <div className='clapStrip'>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
            <div className='chevronDw'></div>
          </div> */}
        </div>


        <div className='clapBody'>
          {/* <div className='clapRowOne'>
            <div className='clapBoxOne'>
              <h2>Login</h2>
            </div>
            <div className='clapBoxOne boxMid'></div>
            <div className='clapBoxOne'></div>
          </div> */}

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
                    required
                    value={username}
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

