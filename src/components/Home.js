import React from 'react';
import './Home.css';
import Movies from './Movies';
import TopRated from './TopRated';

const Home = ({movies, isLoading, errorMsg}) => {

  return (
    <main>
      {errorMsg && <p className='error-message'>{errorMsg}</p>}
      {isLoading && <p className='loading-message'>Loading...</p>}
      {!isLoading &&
        <>
          <TopRated movies={movies}/>
          <Movies movies={movies}/>
        </>
      }
    </main>
    )
  }


export default Home;
