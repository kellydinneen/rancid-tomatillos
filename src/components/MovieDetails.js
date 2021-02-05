import React from 'react';


const MovieDetails = (props) => {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     id: 12,
  //     movie: {}
  //   }
    console.log(props)
  // }
  //
  // componentDidMount = () => {
  //
  // }
  //
  // render() {
    return (
      <div>
        <img src='' alt='' />
        <h3 className='movieTitle'>Movie Title</h3>
        <h3 className='rating'>Rating</h3>
        <h4 className='releaseDate'>Release Date</h4>
      </div>
    )
  }
// }

export default MovieDetails;
