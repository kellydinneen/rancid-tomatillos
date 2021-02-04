import React from 'react';
import './TopRated.css'

const TopRated = ({ movies }) => {
  let moviesToSort = movies.map(movie => movie);
  moviesToSort.sort((a, b) => b.average_rating - a.average_rating);

  return (
      <div>
        <h2 className="top-rated-title">Top Rated</h2>
        <article className="top-movie">
          <h3>{moviesToSort[0].average_rating}</h3>
          <h4>{moviesToSort[0].title}</h4>
        </article>
        <article>
          <h3>{moviesToSort[1].average_rating}</h3>
          <h4>{moviesToSort[1].title}</h4>
        </article>
        <article>
          <h3>{moviesToSort[2].average_rating}</h3>
          <h4>{moviesToSort[2].title}</h4>
        </article>
      </div>
  )

}

export default TopRated;
