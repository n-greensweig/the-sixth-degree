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
      <LogOutButton>log out</LogOutButton>
      <h1>Welcome, {user.first_name}!</h1>
      <p>Your ID is: {user.id}</p>

    


      <Button
        variant='outlined'
        onClick={handleClick}
        >Create Game</Button>
      

      <h2>Now Playing:</h2>

      {games.length > 0 ?
        <div>
          {games.map(game => {
              if (game.is_ongoing && game.active_respondent_id === user.id) {
                return (
                  <>
                    <h3>Actor</h3>
                      <Card>
                        <CardContent>
                            <h4>game ID: {game.id}</h4>
                            <h4>TITLE: Pitt-Jolie</h4>
                            <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
                            <h4>SCENE: active_scene</h4>
                            <h4>SCORE: shows up when you're on scene 2?</h4>
                            <h4>STATUS: You're wanted on set!</h4>
                            <Button variant='outlined'>play</Button>                 
                        </CardContent>
                      </Card>
                  </>
                )
              } else if (game.is_ongoing && game.active_respondent_id !== user.id) {
                  return (
                    <>
                      <h3>Director</h3>
                        <Card>
                          <CardContent>
                              <h4>game ID: {game.id}</h4>
                              <h4>TITLE: Pitt-Jolie</h4>
                              <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
                              <h4>SCENE: active_scene</h4>
                              <h4>SCORE: shows up when you're on scene 2?</h4>
                              <h4>STATUS: Waiting for your actor...</h4>
                              <Button variant='outlined'>play</Button>                 
                          </CardContent>
                        </Card>
                    </>
                  )
              } 
          })}
        </div>

        :

        <div>
            <h3 id="no-games">No games to display!</h3>
        </div>
      }

    

      <h2>Filmography:</h2>

      

      {games.length > 0 ? 
        <div>
          {games.map(game => {
            if (!game.is_ongoing) {
              return (
                <>
                  <Card>
                    <CardContent>
                        <h4>game ID: {game.id}</h4>
                        <h4>TITLE: Pitt-Jolie</h4>
                        <h4>STARRING: {user.first_name} & Friend name based on ID</h4>
                        <h4>SCENE: active_scene</h4>
                        <h4>SCORE: shows up when you're on scene 2?</h4>
                        <h4>STATUS: Waiting for your actor...</h4>
                        <Button variant='outlined'>play</Button>                 
                    </CardContent>
                  </Card>
                </>
              )
            } 
          })}
        </div>

        :

        <div>
          <h4>No game history yet!</h4>
        </div>

    }
  
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;