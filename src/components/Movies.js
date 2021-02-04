import React from 'react';
import Poster from './Poster';
import './Movies.css';

const Movies = ({movies}) => {

  const scroller = React.useRef();

  const scrollLeft = () => {
    console.log(scroller.current);
    scroller.current.scrollLeft -= 400;
  }

  const scrollRight = () => {
    scroller.current.scrollLeft += 400;
  }

  const moviePosters = movies.map(movie => {
    return (
      <Poster
        image={movie.poster_path}
        id={movie.id}
        key={movie.id}
      />
    )
  })

  return (
    <div className='movies'>
      <button id="slideLeft" type="button" onClick={scrollLeft}>Slide left</button>
      <div className='movies-container' id='container' ref={scroller}>
        {moviePosters}
      </div>
      <button id="slideRight" type="button" onClick={scrollRight}>Slide right</button>
    </div>
  )
}

export default Movies;
