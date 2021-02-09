import React from 'react';
import './TopRated.css';
import TopMovie from './TopMovie';

const TopRated = ({ movies }) => {
  let sortedMovies = movies.map(movie => movie).sort((a, b) => b.average_rating - a.average_rating);

  let topThree = [sortedMovies[0], sortedMovies[1], sortedMovies[2]];

  const topThreeComponents = topThree.map((movie, index) => {
    return (<TopMovie movie={movie} key={movie.id} id={index+1}/>)
  })

  return (
      <article>
        <h2 className="top-rated-title">Top Rated</h2>
        <section className="top-three-section">
        {topThreeComponents}
        </section>
      </article>
  )

}

export default TopRated;
