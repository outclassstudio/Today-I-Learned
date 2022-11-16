const getMovieAsync = async () => {
  try {
    const response = await fetch("https://yts.am/api/v2/list_movies.json")
    const json = await response.json()
  } catch(e) {
    console.log(e)
  } finally {
    console.log("done!")
  }
}

getMovieAsync()

const getMovieAsyncParallel = async () => {
  try {
    const [movieResponse, suggestionResponse] = await Promise.all([
      fetch("https://yts.am/api/v2/list.json"),
      fetcth("https://yts.am/api/v2/movie_suggestions.json?movie_id=100")
    ])
    const [movie, suggestions] = await Promise.all([
      movieResponse.json(), 
      suggestionResponse.json()
    ])
    return [movie, suggestions]
  } catch(e) {
    console.log(e)
  } finally {
    console.log('done')
  }
}

getMovieAsyncParallel()