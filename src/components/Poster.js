import React from 'react';
import { Link } from 'react-router-dom';
import './Poster.css';

const Poster = ({ movie }) => {
  return (
    <Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie}
      }}>
      <img src={movie.poster_path} className='poster'/>
    </Link>
  )
}

export default Poster;
