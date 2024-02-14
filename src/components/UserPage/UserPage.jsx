import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const games = useSelector((store) => store.gameReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME', payload: user.id });
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />

      {games?.map(game => {
        return (
          <div key={game.id}>
            <p>Winner: {game.winner_id === null ? 'Noah' : 'no one'}</p>
            <p>Date: {game.date_created}</p>
          </div>
        );
      })}

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
