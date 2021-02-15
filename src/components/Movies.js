import React from 'react';
import Poster from './Poster';
import scrollLeftButton from '../Images/scroll-left.png';
import scrollRightButton from '../Images/scroll-right.png';
import './Movies.css';

const Movies = (props) => {
  const scroller = React.useRef();

  const scrollLeft = () => {
    scroller.current.scrollLeft -= 600;
  }

  const scrollRight = () => {
    scroller.current.scrollLeft += 600;
  }

  const moviePosters = props.movies.map(movie => {
    return (
      <Poster
        movie={movie}
        key={movie.id}
        leaveHome={props.leaveHome}
        user={props.user}
      />
    )
  })

  return (
    <div className='movies'>
      <img className="scrollButtonLeft" src={scrollLeftButton} alt='Scroll Left Arrow' onClick={scrollLeft}/>
      <div className='movies-container' id='container' ref={scroller}>
        {moviePosters}
      </div>
      <img className="scrollButtonRight" onClick={scrollRight} src={scrollRightButton}
      alt='Scroll Right Arrow'/>
    </div>
  )
}

export default Movies;
