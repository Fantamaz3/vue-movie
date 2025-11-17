<script setup>
import { getMovies } from '@/api/tmdb'
import { onMounted, ref } from 'vue'
import MovieCard from './MovieCard.vue'

const movies = ref([])

onMounted(async () => {
  const data = await getMovies()
  if (data?.results) {
    movies.value = data.results.slice(0, 10)
  }
})
</script>

<template>
  <div class="movies-grid">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.movies-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
