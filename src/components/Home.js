import React from 'react';
import './Home.css';
import Movies from './Movies';
import TopRated from './TopRated';

const Home = (props) => {

  const {movies, user, leaveHome} = props;

  return (
    <main>
      {props.errorMsg && <p className='error-message'>{props.errorMsg}</p>}
      {props.isLoading && <p className='loading-message'>Loading...</p>}
      {!props.isLoading && !props.errorMsg &&
        <>
          <TopRated movies={movies} leaveHome={leaveHome} user={user}/>
          <Movies movies={movies} leaveHome={leaveHome} user={user}/>
        </>
      }
    </main>
    )
  }


export default Home;
