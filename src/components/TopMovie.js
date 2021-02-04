import React from 'react';
import './TopMovie.css';

const TopMovie = ({ movie }) => {

  return (
    <>
    <article className="top-movie">
      <h3 className="top-movie-rating">{movie.average_rating}</h3>
      <h4 className="top-movie-title">{movie.title}</h4>
    </article>
    </>

  )
}

export default TopMovie;
