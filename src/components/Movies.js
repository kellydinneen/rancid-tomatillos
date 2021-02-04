import React from 'react';
import Poster from './Poster';
import './Movies.css';

// class Movies extends React.Component {
//   constructor({movies}) {
//     super({movies})
//     this.movies = {movies};
//     this.scroller = React.createRef();
//   }
//
//   getPosters() {
//     return this.movies.map(movie => {
//       return (
//         <Poster
//           image={movie.poster_path}
//           id={movie.id}
//           key={movie.id}
//         />
//       )
//     })
//   }
//
//   scrollRight() {
//     this.scroller.current.scrollLeft -= 20;
//   }
//
//   render() {
//     return (
//       <div className='movies'>
//         <button id="slideLeft" type="button">Slide left</button>
//         <div className='movies-container' ref={this.scroller}>
//           {this.getPosters}
//         </div>
//         <button id="slideRight" type="button" onClick={this.scrollRight}>Slide right</button>
//       </div>
//     )
//   }
// }

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
