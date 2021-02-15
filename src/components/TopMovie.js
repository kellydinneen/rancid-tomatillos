import React from 'react';
import { Link } from 'react-router-dom';
import './TopMovie.css';

const TopMovie = (props) => {

  const {movie, id, user} = props;

  return (
    <>
    <article className="top-movie" id={id}>
      <Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie, user}
      }}  className={`top-movie-rating${id}`} onClick={() => props.leaveHome()}><h3>{movie.average_rating.toFixed(1)}★</h3></Link>
      <Link
      to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie, user}
      }}
      className={`top-movie-title${id}`} onClick={() => props.leaveHome()}><h4>{movie.title}</h4></Link>
    </article>
    </>

  )
}

export default TopMovie;
