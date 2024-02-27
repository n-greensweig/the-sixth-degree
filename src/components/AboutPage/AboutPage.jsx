import React from 'react';
import Nav from '../Nav/Nav';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutPage">
    <Nav />
    <div className="aboutContent">
      <h1>About the 6 Degrees of Kevin Bacon App</h1>
      <br></br>
      <br></br>
      <p>Welcome to the 6 Degrees of Kevin Bacon App, a playful and engaging way to explore the vast universe of film and the concept of "six degrees of separation" within Hollywood. Our app is inspired by the popular game based on the "small world phenomenon" and specifically, the idea that any actor can be linked through their film roles to Kevin Bacon within six steps.</p>
      <br></br>
      <br></br>
      <h2>What Is the 6 Degrees of Kevin Bacon?</h2>
      <br></br>
      <br></br>
      <p>The 6 Degrees of Kevin Bacon is a trivia game that rests on the premise that any actor or actress in the film industry can be connected to Kevin Bacon in six steps or fewer, based on their film roles. The game highlights the interconnectedness of the film industry and showcases Kevin Bacon's extensive career.</p>
      <br></br>
      <br></br>
      <h2>How Does Our App Work?</h2>
      <br></br>
      <br></br>
      <p>Our app makes discovering these connections not just easy but also entertaining. Whether you're a film buff or just curious, here's how you can dive into the world of cinematic connections:</p>
      <br></br>
      <br></br>
      <ul>
        <li><strong>Search Functionality</strong>: Start by searching for any actor or actress in our database. Our app will then show you the shortest path to connect them to Kevin Bacon through shared film roles.</li>
        <br></br>
        <li><strong>Discover Connections</strong>: Explore an interactive map of connections, seeing how actors link to each other and ultimately to Kevin Bacon.</li>
        <br></br>

        <li><strong>Learn About Movies</strong>: Not only do you see the connections, but you also get details about the movies that form these links, enriching your understanding of cinema history.</li>
        <br></br>

        <li><strong>Challenge Your Friends</strong>: Test your knowledge and challenge your friends to find the actor with the longest path to Kevin Bacon or discover unique connections.</li>
        <br></br>
      <br></br>
      </ul>
      
      <h2>Why Kevin Bacon?</h2>
      <br></br>
      <br></br>
      <p>Kevin Bacon was chosen as the center of this game not because he's the most connected actor in Hollywood, but because of a combination of his prolific career and a 1994 interview in which he claimed he had worked with everyone in Hollywood or someone who's worked with them. Thus, the game was born, turning into a cultural phenomenon and now, this app.</p>
      <br></br>
      <br></br>
      <h2>Our Mission</h2>
      <br></br>
      <br></br>
      <p>Our mission is to entertain and educate users about the film industry's interconnectedness. We hope to foster a greater appreciation for the art of cinema and the myriad ways in which its figures are connected.</p>
      <br></br>
      <br></br>
      <h2>Contact Us</h2>
      <br></br>
      <br></br>
      <p>We love hearing from our users! Whether you have feedback, a success story, or a suggestion for improvement, please don't hesitate to reach out.</p>
      <br></br>
      <br></br>
      <p>Thank you for exploring the 6 Degrees of Kevin Bacon with us. Happy connecting!</p>
    </div>
  </div>
  );
}

export default AboutPage;
