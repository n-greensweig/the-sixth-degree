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
      <div>
        <p>This about page is for anyone to read!</p>
      </div>
    </div>
  );
}

export default AboutPage;
