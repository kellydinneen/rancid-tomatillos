import React from 'react';
import { Link } from 'react-router-dom';
import './Poster.css';

const Poster = (props) => {

  const {movie, user, updateUser} = props;

  return (
    <Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie, user, updateUser}
      }}>
      <img src={movie.poster_path} alt={movie.title} className={`poster ${movie.id}`} onClick={() => props.leaveHome()}/>
    </Link>
  )
}

export default Poster;
