import React from 'react';
import { Link } from 'react-router-dom';
import './TopMovie.css';

const TopMovie = (props) => {

  const {movie, id, user} = props;

  return (
    <>
      <Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie, user}
      }}  className={`top-movie-rating${id}`} onClick={() => props.leaveHome()}>
      <article className="top-movie" id={id}>
      <h3>{movie.average_rating.toFixed(1)}★</h3>
      <h4>{movie.title}</h4>
      </article>
      </Link>
    </>

  )
}

export default TopMovie;
