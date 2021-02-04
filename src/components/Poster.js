import React from 'react';
import './Poster.css';

const Poster = ({ image, id, title }) => {
  return (
      <img className='poster' src={image} alt={title}/>
  )
}

export default Poster;
