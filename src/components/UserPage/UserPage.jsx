import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { TextField, Button, Grid, Container, Card, CardContent, Paper, Box } from "@mui/material";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h1>Welcome, {user.first_name}!</h1>
      <p>Your ID is: {user.id}</p>
      <Button
        variant='outlined'
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
