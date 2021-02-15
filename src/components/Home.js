import React from 'react';
import './Home.css';
import Movies from './Movies';
import TopRated from './TopRated';

const Home = (props) => {

  const {movies, user, leaveHome, logIn} = props;

  return (
    <main>
      {props.errorMsg && <p className='error-message'>{props.errorMsg}</p>}
      {props.isLoading && <p className='loading-message'>Loading...</p>}
      {!props.isLoading && !props.errorMsg &&
        <>
          <TopRated movies={movies} leaveHome={leaveHome} user={user} logIn={props.logIn}/>
          <Movies movies={movies} leaveHome={leaveHome} user={user} logIn={props.logIn}/>
        </>
      }
    </main>
    )
  }


export default Home;
