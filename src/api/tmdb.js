const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
}

export async function getMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

  try {
    const response = await fetch(url, options)
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Ошибка при получении фильмов', error)
    return null
  }
}
