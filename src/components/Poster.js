import React from 'react';
import { Link } from 'react-router-dom';
import './Poster.css';

const Poster = (props) => {

  const movie = props.movie;

  return (
    <Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie}
      }} id={movie.id}>
      <img src={movie.poster_path} alt={movie.title} className={`poster ${movie.id}`} onClick={() => props.leaveHome()}/>
    </Link>
  )
}

export default Poster;
