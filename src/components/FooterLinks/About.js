import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className='About'>
      <h1>About</h1>
      <h2>Context</h2>
      <p className='About-text'>This project is the developers' first project in Module 3 of the Front-End Engineering program at Denver's Turing School of Software and Design. After several months of refining their javascript skills, the developers are finally dipping their toes into React and applying their experience with unit testing to implement end-to-end testing with Cypress.js.</p>
      <h2>Design</h2>
      <p className='About-text'>Though the project may function more like Rotten Tomatoes, its design is loosely inspired by emerging movie streaming sites like Mubi and Kanopy. The button scroll navigation through movie posters on the first page as well as the dark color scheme are reminiscent of the movie browsing experiences on these sites.</p>
      <h2>Technologies</h2>
      <h3>React</h3>
      <h3>Cypress.js</h3>
      <h3>Express.js</h3>
      <h3>React Youtube</h3>
      <h3>Heroku</h3>
    </div>
  )
}

export default About;
