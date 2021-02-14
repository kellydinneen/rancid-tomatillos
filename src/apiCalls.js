export const fetchMovieData = (endpoint) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
  .then(res => {
    if (!res.ok) {
        return `${res.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`
      } else {
        return res.json()
      }})
  }

export const fetchUsers = () => {
  return fetch(`https://rancid-tomatillos-api-kd-lm.herokuapp.com/api/v1/users`)
    .then(res => {
      if (!res.ok) {
          return `${res.status} error. Sorry! Something went wrong! Try again later or go to Contact Us to contact the developers with questions!`
        } else {
          return res.json()
        }})
}

export const postFavorite = (user, movie) => {
  const post = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(movie)
    }
  return fetch(`https://rancid-tomatillos-api-kd-lm.herokuapp.com/api/v1/users/${user.id}`, post)
    .then(res => res.json())
    .then(res => fetchUsers())
}
