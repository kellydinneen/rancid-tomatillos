import React from 'react';
import './Home.css';
import Movies from './Movies';
import TopRated from './TopRated';

const Home = (props) => {

  return (
    <main>
      {props.errorMsg && <p className='error-message'>{props.errorMsg}</p>}
      {props.isLoading && <p className='loading-message'>Loading...</p>}
      {!props.isLoading &&
        <>
          <TopRated movies={props.movies} leaveHome={props.leaveHome}/>
          <Movies movies={props.movies} leaveHome={props.leaveHome}/>
        </>
      }
    </main>
    )
  }


export default Home;
