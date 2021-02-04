const Movies = ({movies}) => {

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
    <div className='movies-container'>
      {moviePosters}
    </div>
  )
}
