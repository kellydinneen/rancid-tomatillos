import React from 'react';
import './Poster.css';

const Poster = ({ image, id }) => {
  return (
      <img class='poster' src={image}/>
  )
}

export default Poster;
