import React from 'react';
import Nav from '../Nav/Nav';
import './AboutPage.css';

import { GiFilmSpool } from "react-icons/gi";
import { MdMovieEdit } from "react-icons/md";



function AboutPage() {
  return (
    <div className="aboutPage">
      <Nav />
      <div className='rulesDiv'>

        <div className='rulesTitle'>
          <span className='spoool'><MdMovieEdit /></span>
          <h1>Rules</h1>
          <span className='spoool'><GiFilmSpool /></span>
        </div>
        <p>Welcome to the Sixth Degree, a puzzle solving, movie trivia game where you link actors and movies together in competition with your friends!</p>

        <h4>Actor and Director</h4>
        <p>There are two ways to begin playing. You can either create a game (become the director), or join a game (become the actor).</p>

        <h4>Creating a Game (Director)</h4>
        <p>To begin a game, click the 'Create Game' button. Then, select three (3) scripts to send to your opponent. If you have less than three scripts, you will need to create more. Once you have selected your scripts, click the 'Create Game' button. This will generate a Game Code. Screenshot your code, and send to the player you would like to challenge!</p>

        <h4>Creating a Script</h4>
        <p>To create a script, navigate to the Scripts page, and click on 'Create New Script.' Then fill out your chain of actors and movies in sequence.</p>

        <h4>Join a Game (Actor)</h4>
        <p>To join a game, simply type the Game Code that has been sent to you into the Access# text box and press 'Join Game.' The game will appear on your homepage and you will be able to begin play as well as send three (3) of your own scripts back to the director.</p>

        <h4>On Your Turn</h4>
        <p>If it is your turn, the yellow lights will shine to alert you. Click 'Play' and begin to solve your challengers script. When your scripts are complete, submit them for scoring and claim Victory over all who oppose you.</p>
      </div>
    </div>
  );
}

export default AboutPage;