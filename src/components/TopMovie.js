import React from 'react';
import { Link } from 'react-router-dom';
import './TopMovie.css';

const TopMovie = ({ movie }) => {

  return (
    <>
    <article className="top-movie">
      <h3><Link to={{
        pathname:`/movie-details/${movie.title.replace(/\s+/g, '')}`,
        state: {movie}
      }}  className="top-movie-rating">{movie.average_rating}</Link></h3>
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
