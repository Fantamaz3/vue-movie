const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function getMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`

  try {
    const response = await fetch(url)
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
