import React from 'react';
import { Link } from 'react-router-dom';
import './Poster.css';

const Poster = ({ movie }) => {
  return (
    <Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie}
      }} id={movie.id}>
      <img src={movie.poster_path} alt={movie.title} className={`poster ${movie.id}`} />
    </Link>
  )
}

export default Poster;
