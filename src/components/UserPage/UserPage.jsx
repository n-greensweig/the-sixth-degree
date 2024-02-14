import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { TextField, Button, Grid, Container, Card, CardContent, Paper, Box } from "@mui/material";


function UserPage() {

  // added for CreateGame button
  const history = useHistory();
  const handleClick = () => {
    history.push('/new-game');
  }

  const user = useSelector((store) => store.user);
  const games = useSelector((store) => store.gameReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_GAME', payload: user.id });
  }, []);

  

  return (
    <div className="container">
      <h1>Welcome, {user.first_name}!</h1>
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


      <Button
        variant='outlined'
        onClick={handleClick}
        >Create Game</Button>
      

      <h2>Now Playing:</h2>

      <h3>Actor</h3>
          <Card>
                <CardContent>
                    <h4>TITLE: Pitt-Jolie</h4>
                    <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
                    <h4>SCENE: active_scene</h4>
                    <h4>SCORE: shows up when you're on scene 2?</h4>
                    <h4>STATUS: You're wanted on set!</h4>
                    <Button variant='outlined'>play</Button>                 
                </CardContent>
          </Card>

      <h3>Director</h3>
          <Card>
            <CardContent>

                <h4>TITLE: Cruz-Aniston</h4>
                <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
                <h4>SCENE: active_scene</h4>
                <h4>SCORE:</h4>
                <h4>STATUS: Waiting on your actor...</h4>
                <Button variant='outlined'>view sent scripts</Button>

            </CardContent>
          </Card>

      <h2>Filmography:</h2>
      

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;