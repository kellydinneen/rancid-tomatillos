import React from 'react';
import './FAQ.css';

const FAQ = () => {
  return (
    <div className='FAQ'>
      <h1>FAQ</h1>
      <h2>What is the Turing School of Software and Design?</h2>
      <p className='FAQ-answer'>Turing is a non-profit, Denver based software engineering school, with intensive, 6-month programs in Front-End and Back-End development. Programs focus on rigorous programming practices, including test-driven development and Agile methodologies. Turing is committed to nurturing developers who are as empathetic as they are technically skilled.</p>
      <h2>What is the purpose of this project?</h2>
      <p className='FAQ-answer'>This project was a learning opportunity for the developers. It is their first rodeo using React, Cypress end-to-end testing, and Express.</p>
      <h2>How can "Cats and Dogs 3: Paws Unite" possibly be the top rated movie?</h2>
      <p className='FAQ-answer'>Cats and dogs rule the world.</p>
      <p className='FAQ-cats-dogs'>🐩🐅🐕‍🦴🐈🐾</p>
    </div>
  )
}

export default FAQ;
