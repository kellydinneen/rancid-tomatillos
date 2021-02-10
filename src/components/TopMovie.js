import React from 'react';
import { Link } from 'react-router-dom';
import './TopMovie.css';

const TopMovie = ({ movie, id }) => {
  return (
    <>
    <article className="top-movie" id={id}>
      <h3><Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie}
      }}  className='top-movie-rating' >{movie.average_rating.toFixed(1)}★</Link></h3>
      <h4><Link
      to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie}
      }}
      className="top-movie-title">{movie.title}</Link></h4>
    </article>
    </>

  )
}

export default TopMovie;
