import React from 'react';
import Poster from './Poster';
import scrollLeftButton from './scroll-left.png';
import scrollRightButton from './scroll-right.png';
import './Movies.css';

const Movies = ({movies}) => {

  const scroller = React.useRef();

  const scrollLeft = () => {
    console.log(scroller.current);
    scroller.current.scrollLeft -= 600;
  }

  const scrollRight = () => {
    scroller.current.scrollLeft += 600;
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
      <img className="scrollButton" onClick={scrollRight} src={scrollLeftButton} onClick={scrollLeft}/>
      <div className='movies-container' id='container' ref={scroller}>
        {moviePosters}
      </div>
      <img className="scrollButton" onClick={scrollRight} src={scrollRightButton} onClick={scrollRight}/>
    </div>
  )
}

export default Movies;
