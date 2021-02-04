import React, { Component } from 'react';


class MovieDetails extends Component {
  constructor() {
    super()
    this.state = {
      movie: {}
    }
  }

  componentDidMount = () => {

  }

  render() {
    return (
      <div>
        <img src='' alt='' />
        <h3 className='movieTitle'>Movie Title</h3>
        <h3 className='rating'>Rating</h3>
        <h4 className='releaseDate'>Release Date</h4>
      </div>
    )
  }
}

export default MovieDetails;
